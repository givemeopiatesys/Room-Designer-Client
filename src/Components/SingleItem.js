import React, {useEffect, useState} from 'react';
import {BASE_API_URL} from "../Utils/consts";
import {useParams} from "react-router-dom";
import '../Styles/CSS/singleItem.css'
import testImage1 from '../Styles/Images/table 1.png'


const SingleItem = () => {
    const {id} = useParams();
    const [item, setItem] = useState('');
    useEffect(() => {
        console.log(id)
        fetch(`${BASE_API_URL}items/${id}`)
            .then(response => response.json())
            .then(async data => setItem(data))
        console.log(item)
    }, [])
    return (
        <div className={'main-container-single-item'}>
            <div className={'top-section-single-item'}>
                <div className={'image-section-single-item'}>
                    <img className={'image-single-item'} src={item.imagePath}/>
                </div>
                <div className={'short-desc-section-single-item'}>
                    <div className={'title-single-item'}>{item.title}</div>
                    <div className={'price-single-item'}></div>
                    <div className={'short-dis-single-item'}>{item.description}</div>
                    <hr className={'hr-short-desc-single-item'}/>
                    <div className={'color-container-single-item'}>
                        {item.colors ?
                            item.colors.map((color) => {
                                return (
                                    <div className={'color-single-item'} style={{background: color}}></div>
                                )
                            }) : null}
                    </div>
                    <hr className={'hr-short-desc-single-item'}/>
                    {/*<button className={'order-button-single-item'}>Order item</button>*/}
                </div>
            </div>
            {/*<hr className={'hr-single-item'}/>*/}
            <div className={'lower-section-single-item'}>
                <div className={'under-hr-text-single-item'}>Description</div>
                <div className={'info-single-item'}>General information:{item.description}</div>
                <hr className={'lower-hr-section-single-item'}/>
                <div className={'adjustments-single-item'}>{item.description}</div>
                <hr className={'lower-hr-section-single-item'}/>
                <div className={'full-description-single-item'}>{item.description}</div>
                <hr className={'lower-hr-section-single-item'}/>
                <div className={'material-description-single-item'}>{item.description}</div>
                <hr className={'lower-hr-section-single-item'}/>
            </div>
        </div>
    );
};

export default SingleItem;