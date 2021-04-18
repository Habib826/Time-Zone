import React from 'react';
import InfoData from '../InfoCard/InfoCard';
import Info from '../Info/Info';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
           <Navbar/> 
           <HeaderMain/>
           <InfoData/>
           <Info/>
           
        </div>
    );
};

export default Header;