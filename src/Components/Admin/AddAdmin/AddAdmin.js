import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Header/Navbar/Navbar';

const AddAdmin = () => {
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
  const {register, handleSubmit, errors}= useForm();

  const onSubmit= data => {
    console.log('clicked', data)
    const eventData={
        email: data.email,
       
    }
    fetch('https://guarded-everglades-63027.herokuapp.com/addAdmin',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
       })
       .then(res=> console.log('server response'))
   };

    return (
        <div>
            <Navbar/>
            {
                isAdmin? 
                <form style={{ margin: 'auto', width: '50%'}} className="text-center mt-5" action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                   <h4>Add Admin</h4>
                </label>
                <br/>
                <input
                    type="text"
                    className="form-group"
                     name="email" 
                     placeholder="email"
                     id=""
                     ref={register ({required: true})}
                     />
                     {errors.name && (<p style={{color:'red'}}>This is required</p>)}
                     <br />
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>    
                :
               <div className="mt-5 text-center"  style={{ margin:'auto', width:'50%', color:'red'}}>
                    <h3>This page is only for Admin</h3> 
               </div>
            }
        </div>
    );
};

export default AddAdmin;