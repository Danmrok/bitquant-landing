import React from "react";
import './Pr1.sass'
import logo from "../../Images/Ellipse 5.svg"
import logo1 from "../../Images/Ellipse 6.svg"
import logo2 from "../../Images/Ellipse 7.svg"
import { useTranslation } from "react-i18next";

const Pr1 = () =>{
    const {t} = useTranslation()
    return(
        <div className="Pr1">
            <div className="wrapper">
                <div className="text">
                    <span className="text1">{t('pr1.real')}</span>
                    <span className="text2">{t('pr1.trust')}</span>
                </div>
                <div className="block">
                    <div className="block1">
                        <div className="block1_1">
                            <img className="photo1" src={logo} alt="error" />
                            <span className="span1">{t('pr1.using')}</span>
                        </div>
                    </div>
                    <div className="block2">
                        <div className="block2_2">
                        <img className="photo2" src={logo1} alt="error" />
                        <span className="span2">{t('pr1.innovative')}</span>
                        </div>
                    </div>
                    <div className="block3">
                        <div className="block3_3">
                        <img className="photo3" src={logo2} alt="error" />
                        <span className="span3">{t('pr1.invested')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pr1;