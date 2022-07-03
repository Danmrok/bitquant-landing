import React from "react";
import './Pr3.sass';
import mobile from '../../Images/mobile_1.svg';
import mobile2 from '../../Images/mobile_2.svg';
import mobile3 from '../../Images/mobile_3.svg';
import mobile4 from '../../Images/mobile_4.svg';
import Pay from '../../Images/Payment_list.svg';
import Pay1 from '../../Images/Payment_list_1.svg';
import { useTranslation } from "react-i18next";



const Pr3 = () =>{
    const {t} = useTranslation()
    return(
        <div className="Pr3">
            <div className="wrapper">
                <div className="gallery">
                    <img className="mob1"  src={mobile}  alt="error" />
                    <img className="mob2"  src={mobile2}  alt="error" />
                    <img className="mob3"  src={mobile3}  alt="error" />
                    <img className="mob4"  src={mobile4}  alt="error"  />
                </div>
                <div className="block">
                    <span className="text1">{t('pr3.can')} <span className="big">BitQuant</span> {t('pr3.via')}</span>
                    <span className="text2">{t('pr3.top')}</span>
                    <img  className="photo1" src={Pay}  alt="error" />
                    <img  className="photo2" src={Pay1} alt="error" />
                    <button className="button">{t('pr3.button')}</button>
                </div>
            </div>
        </div>
    )
}



export default Pr3;