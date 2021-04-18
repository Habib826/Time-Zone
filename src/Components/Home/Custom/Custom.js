import React from 'react';
import './Custom.css'
import custom from '../../../images/custom.jpg'

const Custom = () => {
    return (
     <div className="mt-5 mb-5">
         <div className="text-center text-primary">
             <h2>Customize</h2>
         </div>

            <div className="custom-container row d-flex flex-row-reverse mt-5">
            <div className="col-md-4 mt-5 text-center d-flex justify-content-end">
                <div style={{color:'#292b2c'}} className="text-center">
                <h3>Custom your own Design</h3>
                </div>
            </div>
            </div>
     </div>
    );
};

export default Custom;