import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ItemCard from "./ItemCard";
import '../Styles/CSS/itemsSlider.css'
import {BASE_API_URL} from "../Utils/consts";
import {ReactComponent as Next} from '../Styles/Images/NextItems.svg'
import {ReactComponent as Prev} from '../Styles/Images/PrevItems.svg'
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/css/pagination'

const ItemsSlider = () => {
    const [items,setItems] = useState('');
    useEffect(() => {
        fetch(BASE_API_URL + "items")
            .then(response => response.json())
            .then(async data => setItems(data))
    }, [])

    return (
        <div className={'main-container-items-slider'}>
            <Prev className={'swiper-button-prev-unique-items'}/>
            <div className={'content-items-slider'}>
                <Swiper className={'slider-items-slider'}
                        slidesPerView={4}
                        speed={1300}
                        modules={[Navigation,Pagination]}
                        spaceBetween={20}
                        loop={false}
                        navigation={{
                            prevEl: '.swiper-button-prev-unique-items',
                            nextEl: '.swiper-button-next-unique-items',
                            disabledClass: 'swiper-disabled-unique-items',
                        }}
                        // pagination={{ clickable: true }}
                >
                    {items[0] ?
                        items.map((item) => {
                            return (
                                <SwiperSlide className={'slider-slide-items-slider'}>
                                    <ItemCard
                                        imagePath={item.imagePath}
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        colors={item.colors}/>
                                </SwiperSlide>
                            )
                        }) : null}
                </Swiper>
            </div>
            <Next className={'swiper-button-next-unique-items'}/>
        </div>
    );
};

export default ItemsSlider;