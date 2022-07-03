import React, {useState, useRef} from "react";
import './Pr2.sass'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import arrow from '../../Images/Vector 2.png'
import 'swiper/scss/navigation';
import 'swiper/scss';
import { useTranslation } from "react-i18next";



const Pr2 = () =>{
    const {t} = useTranslation()
    const [count,SetCount] = useState(1000);
    const Array = {
        1000:[{
            name: "Pioneer",
            period:1,
            sell: "$39",
            class: "block1_1"
            
        },{
            name: "Adventurer",
            period:3,
            sell: "$105",
            class: "block2_1"
        },{
            name: "Explorer",
            period:6,
            sell: "$185",
            class: "block3_1"
        },{
            name: "Hero",
            period:12,
            sell: "$349",
            class: "block4_1"
        }],
    3000:[{
        name: "Pioneer",
        period:1,
        sell: "$35",
        class: "block1_1"
    },{
        name: "Adventurer",
        period:3,
        sell: "$125",
        class: "block2_1"
    },{
        name: "Explorer",
        period:6,
        sell: "$155",
        class: "block3_1"
    },{
        name: "Hero",
        period:12,
        sell: "$379",
        class: "block4_1"
    }],
    
    5000:[{
        name: "Pioneer",
        period:1,
        sell: "$45",
        class: "block1_1"
    },{
        name: "Adventurer",
        period:3,
        sell: "$145",
        class: "block2_1"
    },{
        name: "Explorer",
        period:6,
        sell: "$195",
        class: "block3_1"
    },{
        name: "Hero",
        period:12,
        sell: "$369",
        class: "block4_1"
    }]
}

    const Array1 = [1000,3000,5000]
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return(
        <div className="Pr2">
            <div className="wrapper">
                <span className="text1">{t('pr2.pricing')}</span>
                <span className="text2">{t('pr2.amount')}</span>
                <div className="rare">
                    {Array1.map(el=>
                       <button style={{background: el === count? 'linear-gradient(90deg, #38D1BC 0%, #2F80ED 100%)':'' }} onClick={() => SetCount(el)}>{el}$</button> )}
                </div>

                <div className="block">
                        {Array[count].map(el=> 
                        <div className={el.class}>
                        <div className="block1_2">
                        <span className="span1">{el.name}</span>
                        <span className="span2">{t('pr2.period')}</span>
                        <span className="span3">{el.period} {t('pr2.month')}</span>
                        <span className="span2">{t('pr2.price')}</span>
                        <span className="span4">{el.sell}</span>
                        </div>
                        <button className="button">{t('pr2.button')}</button>
                    </div>)}
                
                 </div>
                
                 <div className="block1_3">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onSwiper={(swiper) => {
                        // Delay execution for the refs to be defined
                        setTimeout(() => {
                          // Override prevEl & nextEl now that refs are defined
                          swiper.params.navigation.prevEl = navigationPrevRef.current
                          swiper.params.navigation.nextEl = navigationNextRef.current
                
                          // Re-init navigation
                          swiper.navigation.destroy()
                          swiper.navigation.init()
                          swiper.navigation.update()
                        })
                      }}
                    onSlideChange={() => console.log('slide change')}
                    >{Array[count].map(el=> 
                        <SwiperSlide><div className={el.class}>
                        <div className="block1_2">
                        <span className="span1">{el.name}</span>
                        <span className="span2">{t('pr2.period')}</span>
                        <span className="span3">{el.period} {t('pr2.month')}</span>
                        <span className="span2">{t('pr2.price')}</span>
                        <span className="span4">{el.sell}</span>
                        </div>
                        <button className="button">{t('pr2.button')}</button>
                    </div></SwiperSlide>)}
                    <div  ref={navigationPrevRef} />
                    <div  ref={navigationNextRef} />
                    </Swiper>
                
                 </div>


                 <div className="block1_4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onSwiper={(swiper) => {
                        // Delay execution for the refs to be defined
                        setTimeout(() => {
                          // Override prevEl & nextEl now that refs are defined
                          swiper.params.navigation.prevEl = navigationPrevRef.current
                          swiper.params.navigation.nextEl = navigationNextRef.current
                
                          // Re-init navigation
                          swiper.navigation.destroy()
                          swiper.navigation.init()
                          swiper.navigation.update()
                        })
                      }}
                    onSlideChange={() => console.log('slide change')}
                    >{Array[count].map(el=> 
                        <SwiperSlide><div className={el.class}>
                        <div className="block1_2">
                        <span className="span1">{el.name}</span>
                        <span className="span2">{t('pr2.period')}</span>
                        <span className="span3">{el.period} {t('pr2.month')}</span>
                        <span className="span2">{t('pr2.price')}</span>
                        <span className="span4">{el.sell}</span>
                        </div>
                        <button className="button">{t('pr2.button')}</button>
                    </div></SwiperSlide>)}
                    <div className="navigationPrevRef" ref={navigationPrevRef} />
                    <div className="navigationNextRef" ref={navigationNextRef} />
                    </Swiper>

                 </div>
                        <img className="arrow" src={arrow} alt="error" />
            </div>
        </div>
    )
}

export default Pr2;