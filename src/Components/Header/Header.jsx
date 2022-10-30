import React from "react";
import './Header.sass'
import logo from '../Images/logo.svg'
import logo1 from '../Images/logo_1.svg'
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next";
import polygon from '../Images/Polygon 1.svg'
const Header = () =>{

    const {i18n} = useTranslation()
    const {t} = useTranslation()
    const Array = ["en","ru"]
    return(
    <header>
    <div className="header">
        <div className="wrapper">
            <div className="photo">
                <img className="photo1" src={logo} alt="error" />
                <img className="photo2" src={logo1} alt="error" />
            </div>
                <ul className="navbar">
                <Link
                 activeClass="active"
                 to="home" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                    <li className="navbar-item">{t('header.home')}</li></Link>
                    <Link
                 activeClass="active"
                 to="about" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                    <li className="navbar-item">{t('header.about')}</li></Link>
                    <Link
                 activeClass="active"
                 to="Fr2" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                    <li className="navbar-item">{t('header.features')}</li></Link>
                    <Link
                 activeClass="active"
                 to="Pr1" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                    <li className="navbar-item">{t('header.testimonials')}</li></Link>
                    <Link
                 activeClass="active"
                 to="Pr2" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                    <li className="navbar-item">{t('header.pricing')}</li></Link>

                </ul>
                    <button className="register">{t('header.register')}</button>            
                    <div className="error">{Array.map(el=>
                    el === i18n.language? null : <button onClick={()=>i18n.changeLanguage(el)} className="language">{i18n.language} <img src={polygon} alt="error" /></button>  )}
                    </div>    

                <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>  <ul class="menu__box">
                <Link
                
                 activeClass="active"
                 to="home" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}><li><span class="menu__item">{t('header.home')}</span></li></Link>
                <Link
                 activeClass="active"
                 to="about" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}><li><span class="menu__item">{t('header.about')}</span></li></Link>
                <Link
                 activeClass="active"
                 to="Fr2" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}><li><span class="menu__item">{t('header.features')}</span></li></Link>
                <Link
                 activeClass="active"
                 to="Pr1" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}><li><span class="menu__item">{t('header.testimonials')}</span></li></Link>
                <Link
                 activeClass="active"
                 to="Pr2" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                     <li><span class="menu__item">{t('header.pricing')}</span></li></Link>
                     <div className="error1">{Array.map(el=>
                    el === i18n.language? null : <button onClick={()=>i18n.changeLanguage(el)} className="language">{i18n.language}</button>  )}
                    </div> 
                </ul>
                </div>

            
        </div>
    </div>
    </header>
    )
}


export default Header