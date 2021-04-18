import React, { useContext, useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Success from '../Success/Success';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Header/Navbar/Navbar';

const stripePromise = loadStripe('pk_test_51Ig2hnEuvVkNxFeldKh55ab57Fji1TQcZOtxQYgUWEWmDe1TrflGAPdDUb3tKEz5AtW4dOhmHRoQtIVFr57mjqW300qGzxb5Z0');

const BookForm = () => {
    const {id}= useParams()
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const [booking, setBooking] = useState([])
    useEffect(()=>{
        fetch('https://guarded-everglades-63027.herokuapp.com/services/'+id)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])
    const [success, setSuccess]= useState(true);
    const {register, handleSubmit, errors}= useForm();
    const onSubmit= data => {
        console.log(data)
        setSuccess(false)
        const eventData={
            name: data.name,
            email: data.email,
            type: data.type,
            status: data.status
        };
        fetch('https://guarded-everglades-63027.herokuapp.com/bookForm/:id',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    }

  
    return (
        <div>
            <Navbar/>
           {
               success?  <form action="" className="text-center mt-5" onSubmit={handleSubmit(onSubmit)} style={{margin:'auto', width:'50%'}}>
               <label htmlFor="">
                  Name
               </label>
               <br/>
               <input
                   type="text"
                    name="name" 
                    id=""
                    defaultValue={loggedInUser.name}
                    ref={register ({required: true})}
                    />
                    {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                  <br />
               <label htmlFor="">
                  Email
               </label>
               <br/>
               <input
                   type="email"
                    name="email" 
                    id=""
                    defaultValue={loggedInUser.email}
                    ref={register ({required: true})}
                    />
                    {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                 <br />
               <label htmlFor="">
                  Type
               </label>
               <br/>
               <input
                   type="text"
                    name="type" 
                    defaultValue={booking.name}
                    ref={register ({required: true})}
                    />
                    {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                <br />
                <br />
               <input
                   type="text"
                    name="status" 
                    value="pending"
                    ref={register ({required: true})}
                    />
                    {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                <br />
             
               <Elements stripe={stripePromise}>
               <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
               </Elements>
             <input type="submit" className="btn btn-primary" value="Book"/>
           </form>
           
           :<Success/>
           }
            
        </div>
    );
};

export default BookForm;