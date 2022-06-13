import React, {useState} from 'react';
import SellerItemCard from "./SellerItemCard";
import {categoryObj} from "./categoriesobj";

const itemsStaticData = [{
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781",
    alt: "frock picture",
    price: "88.00",
    views: "12",
    favorites: "1"
}, {
    id: 2,
    src: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
    alt: "frock picture",
    price: "5.00",
    views: "12",
    favorites: "1"
}, {
    id: 3,
    src: "https://ae01.alicdn.com/kf/Haab8396bd3694516ac70e692c73f29762/Summer-Dress-For-Girls-Lemon-Print-Sleeveless-Strap-Princess-Dresses-Outfits-Baby-Girl-Clothes-Casual-Vocation.jpg",
    alt: "frock picture",
    price: "5.00",
    views: "12",
    favorites: "1"
}, {
    id: 4,
    src: "https://www.beverlystreet.lk/media/catalog/product/cache/1/small_image/320x/040ec09b1e35df139433887a97daa66f/4/7/4767.jpg",
    alt: "frock picture",
    price: "5.00",
    views: "12",
    favorites: "1"
}, {
    id: 5,
    src: "https://images.herzindagi.info/image/2021/Mar/Are-slippers-good-for-your-feet_g.jpg",
    alt: "frock picture",
    price: "5.00",
    views: "12",
    favorites: "1"
}];

const sortBy = [
    {id: 1, name: 'Relevance'},
    {id: 2, name: 'Price: high to low'},
    {id: 3, name: 'Price: low to high'},
    {id: 4, name: 'Newest first'},
]

const categories = categoryObj;

const SellerItems = ({isSameUser}) => {
    const [items, setItems] = useState(itemsStaticData);

    return (
        <>
            <div className={'text-lg font-medium pl-8'}>{items.length} items</div>
            <div
                className={"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center py-5"}>
                {items.map((item) => (
                    <div key={item.id}>
                        <SellerItemCard src={item.src} alt={item.alt} price={item.price} views={item.views}
                                        favorites={item.favorites}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SellerItems;