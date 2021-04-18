import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
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

  const [bookings, setBookings]= useState([])
  
  useEffect(()=>{
    fetch('https://guarded-everglades-63027.herokuapp.com/bookings?email='+loggedInUser.email)
    .then(res=> res.json())
    .then(data=> setBookings(data))
  },[]);

  const [book, setBook]= useState([])
  console.log(book)
  useEffect(()=>{
    fetch('https://guarded-everglades-63027.herokuapp.com/booking')
    .then(res=> res.json())
    .then(data=> setBook(data))
  },[]);
  const handleUpdate=(id)=>{
    console.log('clicked', id)

  }
    return (
        <div>
          {
            isAdmin?
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                
                </tr>
            </thead>
            <tbody>
            {
                book.map(bk =><tr>
                <th scope="row">{bk.name}</th>
                <th scope="row">{bk.type}</th>
                <th scope="row">
                <select name="cars" id="cars">
                    <option value="pending">Pending</option>
                    <option value="onGoing">On Going</option>
                    <option value="Done">Done</option>
              </select>
                </th>
                <td><button className="btn btn-primary" onClick={() => handleUpdate(book._id)}>Update</button>
                </td>
                </tr>)
            }
                </tbody>
        </table>
          :
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    
                    </tr>
                </thead>
                <tbody>
                {
                    bookings.map(booking =><tr>
                    <th scope="row">{booking.name}</th>
                    <th scope="row">{booking.type}</th>
                    <th scope="row">{booking.status}</th>
                    </tr>)
                }
                    </tbody>
            </table>

          }


        </div>
    );
};

export default BookingList;