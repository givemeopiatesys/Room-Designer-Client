import React from 'react';
import rightImage from '../Styles/Images/nordiclamppng 1.png'
import price from '../Styles/Images/price.svg'
import customer from '../Styles/Images/customer.svg'
import delivery from '../Styles/Images/delivery.svg'
import returns from '../Styles/Images/returns.svg'
import '../Styles/CSS/advantagesGrid.css'
const AdvantagesGrid = () => {
    return (
        <div className={'main-container-advantages-grid'}>
            <div className={'left-block-advantages-grid'}>
                <div className={'info-container-advantages-grid'}>
                    <img className={'svg-advantages-grid'} src={delivery}/>
                    <div className={'title-advantages-grid'}>Fast and safe delivery</div>
                    <div className={'description-advantages-grid'}>Please login and buy our products, safe delivery guaranteed</div>
                </div>
                <div className={'info-container-advantages-grid'}>
                    <img className={'svg-advantages-grid'} src={returns}/>
                    <div className={'title-advantages-grid'}>Quick and easy returns</div>
                    <div className={'description-advantages-grid'}>Items that do not match we are ready to replace, please return</div>
                </div>
                <div className={'info-container-advantages-grid'}>
                    <img className={'svg-advantages-grid'} src={customer}/>
                    <div className={'title-advantages-grid'}>24 hour customer service</div>
                    <div className={'description-advantages-grid'}>Our customer service is ready to serve you at any time, don't hesitate to contact us</div>
                </div>
                <div className={'info-container-advantages-grid'}>
                    <img className={'svg-advantages-grid'} src={price}/>
                    <div className={'title-advantages-grid'}>The price match is very fitting</div>
                    <div className={'description-advantages-grid'}>The price of the products we offer is very in accordance with the quality of the goods</div>
                </div>
                {/*<button>go to</button>*/}
            </div>
            <div className={'right-block-advantages-grid'}>
                <img src={rightImage} className={'right-image-advantages-grid'}/>
            </div>
        </div>
    );
};

export default AdvantagesGrid;