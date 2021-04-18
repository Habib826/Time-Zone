import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    console.log(loggedInUser)

    const ratingChanged = (newRating) => {
      };
    const {register, handleSubmit, errors}= useForm();
    const onSubmit= data => {
        ratingChanged()
        console.log(data)
        const eventData={
            name: data.name,
            description: data.description
        };
        fetch('https://guarded-everglades-63027.herokuapp.com/reviews',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })

      }
    return (
        <div>
           
            <form style={{ margin: 'auto', width: '50%'}} className="text-center mt-5" action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                   Name
                </label>
                <br/>
                <input
                    type="text"
                    className="form-group"
                     name="name" 
                     defaultValue={loggedInUser.name}
                     id=""
                     ref={register ({required: true})}
                     />
                     {errors.name && (<p style={{color:'red'}}>This is required</p>)}
                  <br />
                <label htmlFor="">
                   Description
                </label>
                <br/>
                <textarea
                     type="text"
                     name="description" 
                     id=""
                     ref={register ({required: true})}
                     rows="4" 
                     cols="50"
                    />
                     {errors.description && (<p style={{color:'red'}}>This is required</p>)}
                <br/>

                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
        </div>
    );
};

export default ReviewForm;