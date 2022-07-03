import React from "react";
import { useTranslation } from "react-i18next";
import './Full.sass'


const Full = () =>{
    const {t} = useTranslation()
    return(
        <div className="Full">
            <div className="wrapper">
                <span className="text1">{t('full.try')} <span className="big">BitQuant</span> {t('full.today')} <span className="big">{t('full.for')}</span></span>
                <span className="text2">{t('full.all')}</span>
                <button className="button">{t('full.it')}</button>
            </div>
        </div>
    )
}

export default Full;