import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BASE_API_URL} from "../Utils/consts";
import NewsItem from "./NewsItem";
import '../Styles/CSS/newsItem.css'
import {Grid} from "@mui/material";

const NewsGrid = () => {
    const [news, setNews] = useState('');
    useEffect(() => {
        fetch(BASE_API_URL + "news")
            .then(response => response.json())
            .then(async data => {
                setNews(data.data)
            })
    }, [])

    return (
        <div className={'main-container-news-grid'}>
            <div className={'title-news-grid'}>Last news updates:</div>
            <div className={'content-news-grid'}>
                <Grid container gap={6.5} columns={4}>
                    {news[0] ?
                        news.map((item) => {
                            console.log(item.id)
                            return (
                                <Grid>
                                    <div>
                                        <NewsItem title={item.title} newsId={item.id} body={item.body} key={item.id}/>
                                    </div>
                                </Grid>
                            )
                        }) : null}
                </Grid>
            </div>
        </div>
    );
};

export default NewsGrid;
