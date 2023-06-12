import React, {useEffect, useState} from 'react';
import {Scene} from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {BASE_API_URL} from "../Utils/consts";
import {useParams} from "react-router-dom";
import Viewer from "./viewer";
import '../Styles/CSS/RoomsPage.css'
import RoomViewer from "./RoomViewer";

const RoomBlock = ({roomId}) => {
    let scene = new Scene()
    const [item, setItem] = useState('');
    useEffect(() => {
        setItem('')
        fetch(`${BASE_API_URL}rooms/${roomId}`)
            .then(response => response.json())
            .then(async data => {
                setItem(data)
            })

    }, [])
    useEffect(() => {
        const loader = new GLTFLoader();
        if (item) {
            loader.load(`${item.modelPath}`, function (gltf) {
                scene.add(gltf.scene);
            }, undefined, function (error) {
                console.log(error)
            });
        }
    }, [item])

    return (
        <div className={'main-container-room-block'}>
            <div className={'content-room-block'}>
                <div className={'model-container'}>
                    <section className='model-section-room-block'>{scene && <RoomViewer scene={scene}/>}</section>
                </div>
                <div className={'short-desc-section-room-block'}>
                    <div className={'title-room-block'}>{item.name}</div>
                    <div className={'short-dis-room-block'}>{item.description}</div>
                    {/*<button className={'order-button-single-item'}>Order item</button>*/}
                </div>
            </div>
        </div>
    );
};

export default RoomBlock;
