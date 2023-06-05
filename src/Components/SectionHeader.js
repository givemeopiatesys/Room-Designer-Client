import React from 'react';
import '../Styles/CSS/sectionHeader.css'
const SectionHeader = (props) => {
    return (
        <div className={'main-container-section-header'}>
            <div className={'text-section-header'}>{props.title}</div>
        </div>
    );
};

export default SectionHeader;