import React, {useEffect, useState} from 'react';
import {BASE_API_URL} from "../Utils/consts";

import ItemCardCatalogue from "../Components/ItemCardCatalogue";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CataloguePage = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState('');
    useEffect(() => {
        fetch(BASE_API_URL + "items")
            .then(response => response.json())
            .then(async data => setItems(data))
    }, [])

    return (
        <div style={{background: '#282828', flexGrow: '1', height: '1200px', marginTop: '70px', padding: '50px'}}>
            <Grid container gap={6.5} columns={4}>
                {items[0] ?
                    items.map((item) => {
                        return (
                            <Grid>
                                <div onClick={() => {navigate(`/catalogue/${item.id}`)}}>
                                    <ItemCardCatalogue
                                        imagePath={item.imagePath}
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        colors={item.colors}/>
                                </div>
                            </Grid>
                        )
                    }) : null}
            </Grid>
        </div>
    );
}
    ;

    export default CataloguePage;