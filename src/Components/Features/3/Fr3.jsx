import React from "react";
import './Fr3.sass';
import huobi from '../../Images/huobi.svg';
import binance from '../../Images/binance.svg';
import info from '../../Images/info.svg';
import { useTranslation } from "react-i18next";

const Fr3 = () =>{
    const {t} = useTranslation()
    return(
        <div className="Fr3">
            <div className="wrapper">
                <span className="text1">{t('fr3.support')}</span>
                <span className="text2">{t('fr3.choose')}</span>
                <div  className="gallery">
                <div className="photo1"><img   src={huobi} alt="error" /></div>
                <div className="photo2">
                    <img   className="binance" src={binance} alt="error" />
                    <img   className="info"    src={info}    alt="error" />
                </div>
                
                </div>
            </div>
        </div>
    )
}


export default Fr3;