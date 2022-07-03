import React from "react";
import './About.sass';
import mobile1 from '../Images/phone_1.svg';
import mobile2 from '../Images/phone_2.svg';
import mobile3 from '../Images/phone_3.svg';
import { useTranslation } from "react-i18next";

const About = () =>{
    const {t} = useTranslation()
    return(
        <div className="about">
            <div className="wrapper">

            <div className="photo"><img src={mobile1} alt="error" /></div>
            <div className="photo2"><img src={mobile2} alt="error" /></div>
            <div className="photo3"><img src={mobile3} alt="error" /></div>
            <div className="text">
                <div className="text1"><span className="big">BitQuant</span> {t('about.service')}</div>
                <div className="text2">{t('about.help')}</div>
                <button className="button">{t('about.button')}</button>
            </div>

            </div>

        </div>
    )
}


export default About;