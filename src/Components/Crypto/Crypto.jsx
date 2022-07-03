import React from "react";
import { useTranslation } from "react-i18next";
import './Crypto.sass';

const Crypto = () =>{
    const {t} = useTranslation()
    return(
        <div className="Crypto">
            <div className="wrapper">
                <span className="text">{t('crypto.you')}<br className="and"></br> {t('crypto.in')}</span>
                <button className="button">{t('crypto.get')}</button>
            </div>
        </div>
    )
}


export default Crypto;