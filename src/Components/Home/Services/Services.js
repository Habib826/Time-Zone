import React, {useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';


const Services = () => {

    const [service ,setService]= useState([]);
    useEffect(()=>{
        fetch('https://guarded-everglades-63027.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])   
    


    return (
        <div className="mt-5">
             
            <div className="text-center">
            <h4 style={{color: '#0275d8'}}>Our Services</h4>
            <h2 style={{color: '#292b2c'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
               
                <div className="row equal">
                    {
                        service.map(service =><ServicesCard service={service}></ServicesCard>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default Services;