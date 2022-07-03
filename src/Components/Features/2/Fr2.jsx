import React from "react";
import './Fr2.sass';
import execute from '../../Images/stock-market 1.svg';
import execute2 from '../../Images/stock-market 2.svg';
import margin from '../../Images/margin 1.svg';
import margin2 from '../../Images/margin 2.svg';
import book from '../../Images/instructions 1.svg';
import book2 from '../../Images/instructions 2.svg';
import support from '../../Images/technical-support 1.svg';
import support2 from '../../Images/technical-support 2.svg';
import { useTranslation } from "react-i18next";


const Fr2 = () =>{
    const {t} = useTranslation()
    return(
        <div className="Fr2">
            <div className="wrapper">
                <div className="text">
                    <span className="text1">{t('fr2.main')}</span>
                    <span className="text2">{t('fr2.use')}</span>
                </div>
                <div className="block">
                    <div className="block1">
                        <div className="block1_1">
                            <img className="photo1" src={execute} alt="error" />
                            <img className="photo1_1" src={execute2} alt="error" />
                            <span className="span1">{t('fr2.execute')}</span>
                        </div>
                    </div>
                    <div className="block2">
                        <div className="block2_2">
                            <img className="photo2" src={margin} alt="error" />
                            <img className="photo2_2" src={margin2} alt="error" />
                            <span className="span2">{t('fr2.advisor')}</span>
                        </div>
                    </div>
                    <div className="block3">
                        <div className="block3_3">
                            <img className="photo3" src={book} alt="error" />
                            <img className="photo3_3" src={book2} alt="error" />
                            <span className="span3">{t('fr2.deliver')}</span>
                        </div>
                    </div>
                    <div className="block4">
                        <div className="block4_4">
                            <img className="photo4" src={support} alt="error" />
                            <img className="photo4_4" src={support2} alt="error" />
                            <span className="span4">{t('fr2.try')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fr2;