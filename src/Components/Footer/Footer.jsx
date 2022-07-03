import React from "react";
import './Footer.sass';
import icon from '../Images/Group 1792.svg'
import icon1 from '../Images/icon.svg'

const Footer = () =>{
    return(
        <div className="Footer">
            <div className="wrapper">
                <span className="text1">Support: support@bitquant.online</span>
                <div className="gallery">
                    <img className="icon"  src={icon} alt="error" />
                    <img className="icon1" src={icon1} alt="error" />
                    </div>
                <span className="text2">Bitquant © 2020. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer;