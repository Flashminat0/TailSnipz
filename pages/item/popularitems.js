import React from 'react';
import Popularitemcard from "./popularitemcard";
import Popularitemlayout from "../layouts/popularitemlayout";

const items = [{
    id: 1,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 2,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "24/3X",
    brand: "Torrid"
}, {
    id: 3,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "24/L",
    brand: "Shein"
}, {
    id: 4,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 5,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}];


const Popularitems = () => {
    return (
        <Popularitemlayout>
            {items.map((items, index) => (
                <Popularitemcard index={index} src={items.src} alt={items.alt} price={items.price} size={items.size}
                                 brand={items.brand}/>
            ))}
        </Popularitemlayout>
    );
};

export default Popularitems;