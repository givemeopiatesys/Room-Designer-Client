import React from 'react';
import logo from "../Styles/Images/small_logo.svg";
import '../Styles/CSS/Footer.css'
import git from '../Styles/Images/git.svg'
import vk from '../Styles/Images/vk.svg'
import telegram from '../Styles/Images/telegram.svg'
import gmail from '../Styles/Images/gmail.svg'

const Footer = () => {
    return (
        <div className={'main-container-footer'}>
            <div className={'content-footer'}>
                <div className={'top-section-footer'}>
                    <div className={'left-section-footer'}>
                        <button className={'link-button-footer'}>rooms</button>
                        <button className={'link-button-footer'}>news</button>
                        <button className={'link-button-footer'}>about us</button>
                    </div>
                    <div className={'logo-container-footer'}>
                        <img className={'logo-footer'} src={logo} alt={'Loading..'}/>
                        <div className={'title-footer'}>Room Designer</div>
                    </div>
                    <div className={'right-section-footer'}>
                        <button className={'link-button-footer'}>faq</button>
                        <button className={'link-button-footer'}>catalogue</button>
                        <button className={'link-button-footer'}>support</button>
                    </div>
                </div>
                <hr className={'hr-footer'}/>
                <div className={'down-section-footer'}>
                    <div className={'social-block-footer'}>
                        <img className={'social-item-footer'} src={git}/>
                        <img className={'social-item-footer'} src={vk}/>
                        <img className={'social-item-footer'} src={telegram}/>
                        <img className={'social-item-footer'} src={gmail}/>
                    </div>
                    <div className={'text-footer'}>
                        © Room Designer, Inc. 2023. We love our users!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;