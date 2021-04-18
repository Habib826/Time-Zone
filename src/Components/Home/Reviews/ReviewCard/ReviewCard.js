import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 mb-5">
            
          <div className="d-flex justify-content-center text-center">
             
             <div className="card p-2">
                 <h5 className="card-title text-primary ">
                     {review.name}
                 </h5>
                 <p className="card-text">
                     {review.description}

                 </p>
             </div>

          </div>
        </div>
    );
};

export default ReviewCard;