import React from 'react';
import ModelSlider from "../Components/ModelSlider";
import SectionHeader from "../Components/SectionHeader";
import ItemsSlider from "../Components/ItemsSlider";
import AdvantagesGrid from "../Components/AdvantagesGrid";
import ThreeModel from "../Components/ThreeModel";
import BlenderInfo from "../Components/BlenderInfo";
import Reviews from "../Components/Reviews";

const MainPage = () => {
    return (
        <div>
            <ModelSlider/>
            <SectionHeader title={'Last updates'}/>
            <ItemsSlider/>
            <SectionHeader title={'Why choose us'}/>
            <AdvantagesGrid/>
            <SectionHeader title={'Incredible technology'}/>
            <ThreeModel/>
            <SectionHeader title={'Blender develop'}/>
            <BlenderInfo/>
            <SectionHeader title={'Reviews'}/>
            <Reviews/>
        </div>
    );
};

export default MainPage;