import React from 'react';
import "../Styles/CSS/ItemCard.css"
import testImage1 from '../Styles/Images/table 1.png'

// const colors = [{backColor:"FFFFFF"},{backColor: "black"}]
const ItemCard = (props) => {
    return (
        <div className={'main-container-item-card'}>
            <div className={'title-item-card'}>{props.title}</div>
            <div className={'description-item-card'}>{props.description}</div>
            <img src={testImage1} className={'image-item-card'}/>
            <div className={'color-title-item-card'}>Lets switch color</div>
            <div className={'color-container-item-card'}>
                {props.colors[0] ?
                    props.colors.map((color) => {
                        return (
                            <div className={'color-item-card'} style={{background:color.backColor}}></div>
                        )
                    }) : null}
            </div>
        </div>
    );
};

export default ItemCard;