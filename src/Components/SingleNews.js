import React, {useEffect, useState} from 'react';
import '../Styles/CSS/newsItem.css'
import {useNavigate, useParams} from "react-router-dom";
import {BASE_API_URL} from "../Utils/consts";

const SingleNews = () => {
    const {id} = useParams();
    const [item, setItem] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BASE_API_URL}news/${id}`)
            .then(response => response.json())
            .then(async data => {
                setItem(data)
            })

    }, [])
    return (
        <div className={'main-container-news-item'}>
            <div className={'news-content-news-item'}>
                <div className={'title-news-item'}>{item.title}:{id}</div>
                <div className={'body-news-item'}>{item.body}</div>
                <button onClick={() => {navigate(`/news`)}} className={'news-read-button'}>back</button>
            </div>
        </div>
    );
};

export default SingleNews;
