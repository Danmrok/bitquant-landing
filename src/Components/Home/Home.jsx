import React from "react";
import './Home.sass';
import Laptop from '../Images/Laptop.svg';
import Laptop1 from '../Images/note_1.svg';
import Laptop2 from '../Images/note_2.svg';
import Laptop3 from '../Images/note_3.svg';
import { useTranslation } from "react-i18next";


const Home = () =>{
    const {t} = useTranslation()
    return(
        <div className="home">
            <div className="wrapper">
                <div className="text">
                <div className="text1"><span className="ern">{t('home.start')}</span> {t('home.with')} <span className="ner">{t('home.two')}</span> <span className="ner2">{t('home.buy')}</span> {t('home.with2')} <span className="ern">{t('home.up')}</span> </div>
                <div className="text2">{t('home.earn')}</div>
                <button className="button">{t('home.button')}</button>
                </div>
                <div className="photo">
                    <img src={Laptop} alt="error" />    
                </div> 
                <div className="photo1"><img src={Laptop1} alt="error" /></div>
                <div className="photo2"><img src={Laptop2} alt="error" /></div>
                <div className="photo3"><img src={Laptop3} alt="error" /></div>
            </div>
        </div>
    )
}

export default Home;