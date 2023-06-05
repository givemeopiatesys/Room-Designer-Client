import React from 'react';
import '../Styles/CSS/blenderInfo.css'
import blender from '../Styles/Images/blender.png'
import blender2 from '../Styles/Images/blender2.png'

const BlenderInfo = () => {
    return (
        <div className={'main-container-blender'}>
            <div className={'section-container-blender'}>
                <img src={blender} className={'image-blender'}/>
                <div className={'text-container-blender'}>
                    <div className={'title-blender'}>Sed ut perspiciatis unde omnis</div>
                    <div className={'description-blender'}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</div>
                </div>
            </div>
            <div className={'section-container-blender'}>
                <div className={'text-container-blender'}>
                    <div className={'title-blender'}>Sed ut perspiciatis unde omnis</div>
                    <div className={'description-blender'}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</div>
                </div>
                <img src={blender2} className={'image-blender'}/>
                
            </div>
        </div>
    );
};

export default BlenderInfo;