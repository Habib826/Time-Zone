import React from 'react';
import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({info}) => {
    
    return (
       <div className="col-md-4 info-card mb-5">
          <div className={`d-flex justify-content-center info-container info-${info?.background}`}>
          <div>
               <FontAwesomeIcon className="info-icon mr-4" icon={info?.icon}></FontAwesomeIcon>

           </div>
           <div>
           <div>
                <h5>{info?.title}</h5>
                <p><small>{info?.description}</small></p>
            </div>
           </div>
          </div>
       </div>
    );
};

export default InfoCard;