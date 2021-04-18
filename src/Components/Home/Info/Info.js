import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'


const infoData =[
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Call Us Now',
        description: '+o176677665',
        icon: faPhone,
        background: 'dark'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhaka, Bangladesh',
        icon: faMapMarkerAlt,
        background: 'primary'
    }
];

const ServiceInfo = () => {
    return (
        <div className="d-flex justify-content-center bg-light">
           <div className="w-75 row mt-5">
               {
                infoData.map(info =><InfoCard info={info}></InfoCard>) 
                }
           </div>
        </div>
    );
};

export default ServiceInfo;