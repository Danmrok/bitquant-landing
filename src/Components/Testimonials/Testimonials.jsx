import React from "react";
import './Testimonials.sass'
import { useTranslation } from "react-i18next";


const Testimonials = () =>{
    const {t} = useTranslation()
    return(
        <div className="Testimonials">
            <div className="wrapper">
                <span className="text1"><span className="big">BitQuant</span> {t('testimonials.use')} <span className="big">100,000</span> {t('testimonials.user')}<br className="br"></br> {t('testimonials.why')}</span>
                <span className="text2">{t('testimonials.bitquant')}</span>
                <button className="button">{t('testimonials.button')}</button>
            </div>
        </div>
    )
}

export default Testimonials;