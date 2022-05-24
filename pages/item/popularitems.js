import React, {useState} from 'react';
import Popularitemcard from "./popularitemcard";
import Popularitemlayout from "../layouts/popularitemlayout";

const itemsStaticData = [{
    id: 1,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 2,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/3X",
    brand: "Torrid"
}, {
    id: 3,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/L",
    brand: "Shein"
}, {
    id: 4,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 5,
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "2/XS",
    brand: "Shein"
}];


const Popularitems = () => {
    const [items, setItems] = useState(itemsStaticData);

    return (
        <Popularitemlayout>
            {items.map((item) => (
                <div key={item.id}>
                    <Popularitemcard src={item.src} alt={item.alt} price={item.price} size={item.size}
                                     brand={item.brand}/>
                </div>
            ))}
        </Popularitemlayout>
    );
};

export default Popularitems;