import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Manage = () => {

    const [service, setService]= useState([]);
    useEffect(()=>{
        fetch('https://guarded-everglades-63027.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setService(data))
    },[service])

    const handleDelete= (id)=> {
        console.log(id)
        fetch('https://guarded-everglades-63027.herokuapp.com/delete/'+id,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=> {
            console.log('delete')
        })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    
                    </tr>
                </thead>
                <tbody>
                {
                    service.map(service =><tr>
                    <th scope="row">{service.name}</th>
                    <td><img style={{width:'50px'}} src={service.img} alt=""/></td>
                    
                    <td><button className="btn btn-primary" onClick={() => handleDelete(service._id)}><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
                    </tr>)
                }
                    </tbody>
            </table>
        </div>
    );
};

export default Manage;