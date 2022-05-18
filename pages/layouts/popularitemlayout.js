import React, {useRef} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
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
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className={"px-4 overflow-x-hidden overflow-y-hidden scroll-smooth max-w-lg lg:max-w-full flex flex-row gap-3"} ref={ref}>
            <div className={`lg:hidden absolute -left-4 sm:left-2 lg:left-1/4`}>
                <div onClick={() => {
                    scroll(-100)
                }}
                     className={"absolute h-10 w-10 grid place-items-center left-4 top-36 bg-black bg-opacity-70 rounded-full cursor-pointer"}>
                    <ChevronLeftIcon className={"text-white w-10 h-10"}/>
                </div>
            </div>
                {items.map((items)=>(
                    <Popularitemcard src={items.src} alt={items.alt} price={items.price} size={items.size} brand={items.brand}/>
                ))}
            <div className={"w-56 bg-gray-200 inline-flex items-center place-content-center"}>
                <div className={"text-gray-500"}>See all popular items</div>
            </div>
            <div className={`lg:hidden absolute -right-64 sm:right-2 lg:right-1/4`}>
                <div onClick={() => {
                    scroll(100)
                }}
                     className={"absolute h-10 w-10 place-items-center right-4 top-36 bg-black bg-opacity-70 rounded-full cursor-pointer"}>
                    <ChevronRightIcon className={"text-white w-10 h-10"}/>
                </div>
            </div>
        </div>
    );
};

export default Popularitemlayout;