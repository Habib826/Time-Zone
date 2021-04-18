import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const care = [
        {name: "Emergency  Care" , link: "/emergency"},
        {name: "Custom your Watch" , link: "/custom"},
        {name: "Watch Extraction" , link: "/watch-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const ourAddress = [
        {name: "Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Emergency  Care" , link: "/emergency"},
        {name: "Custom your Watch" , link: "/custom"},
        {name: "Watch Extraction" , link: "/watch-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both text-center">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle={"Care"} menuItems={care}/>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}/>
                    {/* <FooterColumn key={3} menuTitle="Oral Health" menuItems={oralHealth}/> */}
                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+176677665</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;