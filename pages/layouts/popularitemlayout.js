import React from 'react';
import Popularitemcard from "../item/popularitemcard";

const items = [{
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "12/L",
    brand:"Shein"
},{
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "24/3X",
    brand:"Torrid"
},{
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "24/L",
    brand:"Shein"
},{
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "12/L",
    brand:"Shein"
},{
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "2/XS",
    brand:"Shein"
},];

const Popularitemlayout = ({children}) => {
    return (
        <div className={"px-4 grid grid-cols-6 gap-1"}>
                {items.map((items)=>(
                    <Popularitemcard src={items.src} alt={items.alt} price={items.price} size={items.size} brand={items.brand}/>
                ))}
            <div className={"col-start-6 col-end-7 bg-gray-200 inline-flex items-center place-content-center"}>
                <div className={"text-gray-500"}>See all popular items</div>
            </div>
        </div>
    );
};

export default Popularitemlayout;