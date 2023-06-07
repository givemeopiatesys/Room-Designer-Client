import React, {useEffect, useState} from 'react';
import '../Styles/CSS/reviews.css'
import line from '../Styles/Images/Rectangle.svg'
import logo from '../Styles/Images/logo-big.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import ItemCard from "./ItemCard";
import ReviewItem from "./ReviewItem";
import jane from '../Styles/Images/Jane.png'
import yaroslav from '../Styles/Images/Yaroslav.jpg'
import {Navigation, Pagination} from "swiper";
import {ReactComponent as Next} from '../Styles/Images/Next.svg'
import {ReactComponent as Prev} from '../Styles/Images/Prev.svg'
import {BASE_API_URL} from "../Utils/consts";
const Reviews = () => {
    const reviewslocal = [
        {
            img: jane,
            name: "Jane Lewus",
            job: "Housewife",
            body:"The services and products offered are very good, matched what I was looking for. now my room is more beautiful and aesthetic.",
            id: 1
        },
        {
            img: yaroslav,
            name: "Yaroslav Shelkovich",
            job: "Admin",
            body:"The services my work.",
            id: 2
        },
    ]
    const [reviews,setReviews] = useState('');

    useEffect(() => {
        fetch(BASE_API_URL + "reviews")
            .then(response => response.json())
            .then(async data => setReviews(data))
    }, [])

    return (
        <div className={'main-container-reviews'}>
            <div className={'left-block-reviews'}>
                <div className={'title-reviews'}>What are they saying ?</div>
                <div className={'slider-reviews'}>
                    <Swiper className={'slider-items-slider'}
                            slidesPerView={1}
                            modules={[Navigation,Pagination]}
                            speed={1800}
                            loop={false}
                            spaceBetween={20}
                            navigation={{
                                prevEl: '.swiper-button-prev-unique-review',
                                nextEl: '.swiper-button-next-unique-review',
                                disabledClass: 'swiper-disabled-unique',
                            }}
                    >
                    {reviews[0] ?
                        reviews.map((review) => {
                            return (
                                <SwiperSlide className={'slider-slide-reviews'}>
                                    <ReviewItem
                                        key={review.id}
                                        img={yaroslav}
                                        name={review.name}
                                        job={review.occupation}
                                        body={review.testimony}
                                    />
                                </SwiperSlide>
                            )
                        }) : null}
                        </Swiper>
                </div>
                <div className={'controls-slider-reviews'}>
                    <Next className={'swiper-button-next-unique-review'}/>
                    <Prev className={'swiper-button-prev-unique-review'}/>
                </div>
                <img src={line} className={'line-reviews'}/>
            </div>
            <div className={'right-block-reviews'}>
                <img src={logo} className={'logo-reviews'}/>
            </div>
        </div>
    );
};

export default Reviews;