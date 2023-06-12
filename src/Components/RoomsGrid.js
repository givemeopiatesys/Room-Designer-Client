import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {BASE_API_URL} from "../Utils/consts";
import RoomBlock from "./RoomBlock";

const RoomsGrid = () => {
    const [rooms, setRooms] = useState('');
    useEffect(() => {
        fetch(BASE_API_URL + "rooms")
            .then(response => response.json())
            .then(async data => {
                setRooms(data)
            })
    }, [])


    return (
        <div className={'main-container-news-grid'}>
            <div style={{marginBottom:'100px'}} className={'title-news-grid'}>Last rooms updates:</div>
            <div>
                <div>
                    {rooms[0] ?
                        rooms.map((item) => {
                            console.log(item.id)
                            return (
                                    <div>
                                        <RoomBlock roomId={item.id}/>
                                    </div>
                            )
                        }) : null}
                </div>
            </div>
        </div>
    );
};

export default RoomsGrid;
