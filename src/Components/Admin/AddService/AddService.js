import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const AddService = () => {
    const {register, handleSubmit, errors}= useForm();
    const [imageURL, setImageURL] = useState(null)
    const handleImageChange= event =>{
        const newImageData= new FormData()
        newImageData.set('key', '2d994a0ba9d4b502d038cfceab6fc9ed')
        console.log(event.target.files[0])
        newImageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', newImageData)
          .then(function (response) {
              console.log(response)
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    const onSubmit= data => {
        console.log(data)
        const eventData={
            name: data.name,
            description: data.description,
            img: imageURL
        }
        fetch('https://guarded-everglades-63027.herokuapp.com/addServices',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
           })
           .then(res=> console.log('server response'))
       };
       const update=()=>{
           alert('success')

       }

    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                   Name
                </label>
                <br/>
                <input
                    type="text"
                     name="name" 
                     id=""
                     ref={register ({required: true})}
                     />
                     {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                  <br />
                <label htmlFor="">
                 Description
                </label>
                <br/>
                <textarea
                    type="text"
                     name="description" 
                     id=""
                     cols="30"
                     ref={register ({required: true})}
                     />
                     {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                  <br />
                <label htmlFor="">
                   Image
                </label>
                <br/>
                <input
                    type="file"
                     name="img" 
                     id=""
                     onChange={handleImageChange}
                     ref={register ({required: true})}
                     />
                     {errors.email && (<p style={{color:'red'}}>This is required</p>)}
                  <br />
               
                <input type="submit" onClick={update} className="btn btn-primary" value="Update"/>
            </form>
        </div>
    );
};

export default AddService;