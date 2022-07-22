import React, {useEffect, useState} from 'react'
import FavouriteItemsWrapper from '../layouts/FavouriteItemsWrapper';
import FavouriteItemCard from './FavouriteItemCard';
import axios from "axios";

const FavouriteItems = () => {

    const [items, setItems] = useState([]);

    //TODO check how to get the current user id - localstorage.getitem()
    useEffect(async () => {
        await axios.get('/api/favourites/fetch-favourites-product-list', {params: {userId: "6295a5df23a7b8fc7496408c"}})
            .then((result) => {
                setItems(result.data.favourites)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <FavouriteItemsWrapper>
            {items.map((item) => (
                <div key={item}>
                    <FavouriteItemCard id={item}/>
                </div>
            ))}
        </FavouriteItemsWrapper>
    )
}

export default FavouriteItems