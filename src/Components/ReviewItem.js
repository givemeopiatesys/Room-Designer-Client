import React from 'react';
import '../Styles/CSS/reviewItem.css'
const ReviewItem = (props) => {

    return (
        <div className={'main-container-review-item'}>
            <div className={'top-section-review-item'}>
                <img className={'user-avatar-review-item'} src={props.img} />
                <div className={'text-container-review-item'}>
                    <div className={'username-review-item'}>{props.name}</div>
                    <div className={'user-job-review-item'}>{props.job}</div>
                </div>
            </div>
            <div className={'body-review-item'}>
                {props.body}
            </div>
        </div>
    );
};

export default ReviewItem;