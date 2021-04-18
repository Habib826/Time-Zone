import React from 'react';
import Custom from './Custom/Custom';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Custom/>
            <Reviews/>
           
        </div>
    );
};

export default Home;