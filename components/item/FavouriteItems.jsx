import React, {useEffect, useState} from 'react'
import FavouriteItemsWrapper from '../layouts/FavouriteItemsWrapper';
import FavouriteItemCard from './FavouriteItemCard';
import axios from "axios";

const itemsStaticData = [{
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 2,
    src: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/3X",
    brand: "Torrid"
}, {
    id: 3,
    src: "https://ae01.alicdn.com/kf/Haab8396bd3694516ac70e692c73f29762/Summer-Dress-For-Girls-Lemon-Print-Sleeveless-Strap-Princess-Dresses-Outfits-Baby-Girl-Clothes-Casual-Vocation.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/L",
    brand: "Shein"
}, {
    id: 4,
    src: "https://www.beverlystreet.lk/media/catalog/product/cache/1/small_image/320x/040ec09b1e35df139433887a97daa66f/4/7/4767.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 5,
    src: "https://images.herzindagi.info/image/2021/Mar/Are-slippers-good-for-your-feet_g.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}, {
    id: 6,
    src: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}, {
    id: 7,
    src: "https://i.pinimg.com/474x/3d/5f/71/3d5f71a8799595b1478b7436395f0701.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}, {
    id: 8,
    src: "https://4.imimg.com/data4/BK/IJ/ANDROID-62026821/product-500x500.jpeg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}, {
    id: 9,
    src: "https://cdn.outfitbook.fr/24022-thickbox_default/tailored-straight-leg-trousers-taupe.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}, {
    id: 10,
    src: "https://i.pinimg.com/474x/cb/05/31/cb0531059d60bc406f2f6c6878093374.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}];

const FavouriteItems = () => {

    const [items, setItems] = useState([]);

    //TODO check how to get the current user id
    useEffect(async () => {
        await axios.get('/api/favourites/fetch-favourites-product-list', {params: {userId: "629a8c2f26b267cc90f62991"}})
            .then((result) => {
                console.log(result.data.favourites);
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
                    <FavouriteItemCard id ={item}/>
                </div>
            ))}

        </FavouriteItemsWrapper>
    )
}

export default FavouriteItems