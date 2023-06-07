import React from 'react';
import '../Styles/CSS/itemCardCatalogue.css'

const ItemCardCatalogue = (props) => {
    return (
        <div className={'main-container-item-card'}>
            <div className={'title-item-card'}>{props.title}</div>
            <div className={'description-item-card'}>{props.description}</div>
            <img src={props.imagePath} className={'image-item-card'}/>
            <div className={'color-title-item-card'}>Available colors</div>
            <div className={'color-container-card'}>
                {props.colors[0] ?
                    props.colors.map((color) => {
                        return (
                            <div className={'color-item-card'} style={{background:color}}></div>
                        )
                    }) : null}
            </div>
        </div>
    );
};

export default ItemCardCatalogue;