import React from 'react';
import yaroslav from '../Styles/Images/Yaroslav.jpg'
import '../Styles/CSS/aboutUs.css'
import logo from '../Styles/Images/logo-big.svg'

const AboutUsGrid = () => {
    return (
        <div className={'main-container-about-us'}>
            <div className={'content-about-us'}>
                <div className={'top-section-about-us'}>
                    <div className={'img-avatar-container-about-us'}>
                        <img src={yaroslav} className={'img-avatar-about-us'}/>
                    </div>
                    <div className={'top-text-section-about-us'}>
                        <div className={'title-top-section-about-us'}>Yaroslav Shelkovich</div>
                        <div className={'job-top-section-about-us'}>React Frontend</div>
                        <div className={'description-top-section-about-us'}>
                            At the moment, there’s nothing that could
                            possibly stop me or slow me down in
                            learning. Also, I’m a quick learner and I
                            yearn for new experience in the industry.
                        </div>
                    </div>
                    <div className={'top-text-section-about-us'}>
                        <div className={'title-top-section-about-us'}>Room Designer</div>
                        <div className={'job-top-section-about-us'}>Graduate work</div>
                        <div className={'description-top-section-about-us'}>
                            A project that will allow me to show my abilities and skills as a full-stack developer.
                        </div>
                    </div>
                </div>
                <div className={'top-section-about-us'}>
                    <div className={'img-avatar-container-about-us'}>
                        <img src={logo} className={'img-avatar-about-us'}/>
                    </div>
                    <div className={'top-text-section-about-us'}>
                        <div className={'title-top-section-about-us'}>Technologies Kit</div>
                        <div className={'job-top-section-about-us'}>Frontend</div>
                        <div className={'description-top-section-about-us'}>
                            The project is made in the JS programming language, on the React framework.
                            Three.js was chosen as the main unique technology, which allows you to work with
                            webGL and in particular with 3D models.
                        </div>
                    </div>
                    <div className={'top-text-section-about-us'}>
                        <div className={'title-top-section-about-us'}></div>
                        <div className={'job-top-section-about-us'}>Backend</div>
                        <div className={'description-top-section-about-us'}>
                            On the BackEnd, I use the same programming language - JS,
                            but on the Nest.js framework which allowed me to write a strong architecture
                            with knowledge of the JS syntax, the framework runs on TypeJS, which allows for
                            strong typing and improves reliability and better debugging on the project.
                            TypeORM was chosen as the ORM due to private updates to Nest.js.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsGrid;
