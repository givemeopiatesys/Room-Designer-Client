import React from 'react';
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, PerspectiveCamera} from "@react-three/drei";
import {Model} from "./Model";
import '../Styles/CSS/threeModel.css'
import {OrbitControls} from '@react-three/drei'

const ThreeModel = () => {

    return (
        <div className={'main-container-three'}>
            <div className={'content-container-three'}>
                <div className={'canvas-three'}>
                    <Canvas >
                        <Suspense fallback={null}>
                            <Model className={'model-three'}/>
                            <Environment preset="city"/>
                        </Suspense>
                        <OrbitControls/>
                    </Canvas>
                </div>
                <div className={'right-text-block-three'}>
                    <div className={'title-three'}>Interactive 3D design</div>
                    <div className={'description-three'}>We use brand new technology to help you redesign your room in
                        the most intuitive way possible.
                        Change the lighting, change the furniture and its color with the material.
                        All this is available with us.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeModel;