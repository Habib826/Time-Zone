import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServicesCard = ({service}) => {
    const {name, img, description, _id}= service;
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
    return (
        
         <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
          className="col-md-4 text-center mt-5 mb-5 pt-5">
          <img className="m-3" style={{width:'40%'}}  src={img} alt=""/>
         <h4 style={{color: '#0275d8'}}>{name}</h4> 
         <p className="text-secondary">{description}</p>
        <Link to={"/bookForm/"+_id}> <button className="btn btn-primary" >Book Now</button></Link>
        </animated.div>  
      
       
        
    );
};

export default ServicesCard;