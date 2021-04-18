import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    const [review, setReview]= useState([])
    useEffect(()=>{
        fetch('https://guarded-everglades-63027.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="mt-5">
             <h2 className="text-center text-primary">Our Customer Review</h2>
            <div className="d-flex justify-content-center bg-light">
           <div className="w-75 row mt-5">
               
               {
                 review.map(review=><ReviewCard review={review}></ReviewCard>)
               }
           </div>
        </div>
        </div>
    );
};

export default Reviews;