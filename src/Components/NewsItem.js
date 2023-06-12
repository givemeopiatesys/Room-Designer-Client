import React from 'react';
import '../Styles/CSS/newsItem.css'
import {useNavigate} from "react-router-dom";
const title = "Update file system"
const description = "Today, 06/12/2023, a file system update was released to support new 3D model extensions on our website. In this update, you can find the latest 3D model extensions for Blender. These extensions will be used in Blender 3.8. If you want updates, please use Blender 2.79 or later. 3D models. Added new extensions for 3D models. Use them with our models. New extensions: Cone, Cylinder, Mesh, Polygonal, Plane, Particle, Quaternion, Torus, Vector. List of extensions: Extension: Cylinder Extensions: Cone"
const cutText = (text) =>{
    if(text.length>420){
       return text.substring(0, 419) + "...";
    }
    return text
}

const NewsItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className={'main-container-news-item'}>
            <div className={'news-content-news-item'}>
                <div className={'title-news-item'}>{props.title}</div>
                <div className={'body-news-item'}>{cutText(props.body)}</div>
                <button onClick={() => {navigate(`/news/${props.newsId}`)}} className={'news-read-button'}>read more</button>
            </div>
        </div>
    );
};

export default NewsItem;
