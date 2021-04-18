import React from 'react';
import watch from '../../../../images/watch2.png'

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="d-flex align-items-center">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h3>Your Time <br />Our Responsibility</h3>

                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                     at tempora obcaecati. Delectus, optio odio nesciunt ipsa asperiores exercitationem dolore.</p>
                     <button className="btn btn-primary">Get Service</button>
                    
                </div>
                <div className="col-md-6">
                    <img style={{width:'90%'}} src={watch}  alt="Watch" className="img-fluid"/>

                </div>
            </div>
        </main>
    );
};

export default HeaderMain;