import React, { useContext, useEffect, useState } from 'react';
import './Book.css'
import Navbar from '../Home/Header/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown, faEdit, faKeyboard, faList, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import BookForm from './BookForm/BookForm';
import BooKingList from './BookingList/BookingList'
import ReviewForm from './ReviewForm/ReviewForm';
import AddService from '../Admin/AddService/AddService';
import Manage from '../Admin/Manage/Manage';
import { UserContext } from '../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const [isAdmin, setIsAdmin]= useState(false)
    useEffect(()=>{
        fetch('https://guarded-everglades-63027.herokuapp.com/isAdmin',{

            method: "POST",
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data=> setIsAdmin(data))
    },[])
    const [bookForm, setBookForm]= useState(false);
    const [bookList, setBookList]= useState(false);
    const handleBookList=()=> {
        setReview(false);
        setBookForm(false);
        setManage(false);
        setBookList(true);
    }
    const [review, setReview]= useState(false);
    const handleReview=()=> {
        setBookList(false);
        setBookForm(false);
        setManage(false);
        setService(false);
        setReview(true);
    }
    const [service, setService]= useState(false);
    const handleAddService=()=> {
        setBookList(false);
        setBookForm(false);
        setReview(false);
        setService(true);
        setManage(false);
    }
    const [manage, setManage]= useState(false);
    const handleManage=()=> {
        setBookList(false);
        setBookForm(false);
        setReview(false);
        setService(false);
        setManage(true)
    }

    return (
       <div>
           <Navbar/>
            <div className="book-main mt-5">
           <div className="row d-flex justify-content-center">
           <div className="col-md-3">
                <div className="d-flex flex-column mb-3 text-center book-menu">
               
                <div className="p-2 mt-3" onClick={handleBookList}><FontAwesomeIcon icon={faList}/>  Booking List</div>
                
                  <Link to="/reviewForm"> <div className="p-2 mt-3" onClick={handleReview}><FontAwesomeIcon icon={faKeyboard}/>  Review</div> </Link>
                
               

              {
                  isAdmin && <div>
                  <div className="p-2 mt-3" onClick={handleAddService}><FontAwesomeIcon icon={faPlus}/>  Add Services</div>
                  <div className="p-2 mt-3" onClick={handleManage}><FontAwesomeIcon icon={faEdit}/>  Manage</div>
                  </div>
                
              }
                </div>
            </div>
                <div className="col-md-9 text-center bg-light">
               {
                  bookForm && <BookForm/>
               }
               {
                   bookList && <BooKingList/>
               }
               {
                   review && <ReviewForm/>
               }
               {
                   service && <AddService/>
               }
               {
                   manage && <Manage/>
               }
                </div>
           </div>
        </div>
       </div>
    );
};

export default Book;