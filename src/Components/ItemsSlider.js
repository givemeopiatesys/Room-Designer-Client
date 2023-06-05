import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import ItemCard from "./ItemCard";
import '../Styles/CSS/itemsSlider.css'

const items = [
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 3
    },
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 2
    },
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 1
    },
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 4
    },
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 5
    },
    {
        title: "Nordic wood table",
        description: "Made of ash wood with solid wood legs, which makes it resistant and more durable. The color of its wood provides light and warmth in any room.",
        colors: [{backColor: "#50566C"}, {backColor: "#D9D9D9"}, {backColor: "#E7CD8B"}, {backColor: "#F29191"}, {backColor: "#EDE2E2"}, {backColor: "#373131"}],
        id: 6
    },
]


const ItemsSlider = () => {
    return (
        <div className={'main-container-items-slider'}>
            <div className={'content-items-slider'}>
                <Swiper className={'slider-items-slider'}
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation,Pagination]}
                        speed={1300}
                        spaceBetween={20}
                        loop={false}
                        pagination={{ clickable: true }}
                >
                    {items[0] ?
                        items.map((item) => {
                            return (
                                <SwiperSlide className={'slider-slide-items-slider'}>
                                    <ItemCard
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        colors={item.colors}/>
                                </SwiperSlide>
                            )
                        }) : null}
                </Swiper>
            </div>
        </div>
    );
};

export default ItemsSlider;