import React from "react";
import './Fr1.sass'
import one from '../../Images/Vector_1.png'
import two from '../../Images/Vector_2.png'
import three from '../../Images/Vector_3.png'
import { useTranslation } from "react-i18next";

const Fr1 = () =>{
    const {t} = useTranslation()
    return(
        <div className="Fr1">
            <div className="wrapper">
                <div className="text">
                    <span className="text1">{t('fr1.reason')}</span>
                    <span className="text2">{t('fr1.use')}</span>
                </div>
                <div className="block">
                    <div className="block1_1">
                    <div className="block1">
                        <img className="photo1" src={one} alt="error" />
                        <span className="span1">{t('fr1.automatic')}</span>
                    </div>
                    </div>
                    <div className="block2_2">
                    <div className="block2">
                        <img className="photo2" src={two} alt="error" />
                        <span className="span2">{t('fr1.provide')}</span>
                    </div>
                    </div>
                    <div className="block3_3">
                    <div className="block3">
                        <img className="photo3" src={three} alt="error" />
                        <span className="span3">{t('fr1.trading')}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Fr1;