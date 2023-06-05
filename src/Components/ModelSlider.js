import React from 'react';
import '../Styles/CSS/modelSlider.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import model from '../Styles/Images/3droomModelSlider.svg'
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nisl id ultricies bibendum, felis mauris tempor erat, sed maximus nunc turpis ut leo."
const ModelSlider = () => {
    return (
        <div className={'main-container-model-slider'}>
            <div className={'left-container-model-slider'}>
                <div className={'text-container-model-slider'}>
                    <div className={'title-model-slider'}>
                        Room Designer
                    </div>
                    <div className={'text-model-slider'}>
                        {text}
                    </div>
                </div>
                <form className={'input-container-model-slider'}>
                    <input className={'input-model-slider'} placeholder={'Lets find some furniture...'}/>
                    <button className={'button-model-slider'}>lets go</button>
                </form>
            </div>
            <div className={'right-container-model-slider'}>
                <Swiper navigation={false} className="swiper-model-slider">
                    <SwiperSlide><img src={model}/></SwiperSlide>
                    <SwiperSlide><img src={model}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ModelSlider;