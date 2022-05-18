import React, {useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/solid";

const searches = [
    {id: 1, pos: 1, name: "Victoria's Secret", views: "17.5K views", active: true},
    {id: 2, pos: 2, name: "Michael Kors", views: "10.7K views", active: true},
    {id: 3, pos: 3, name: "Vans", views: "6.78K views", active: true},
    {id: 4, pos: 4, name: "adidas", views: "10.9K views", active: true},
    {id: 5, pos: 5, name: "Shein", views: "32.1K views", active: true},
    {id: 6, pos: 6, name: "Ray-Ban", views: "1.45K views", active: true},
    {id: 7, pos: 7, name: "Converse Shoes", views: "3.64K views", active: true},
    {id: 8, pos: 8, name: "Levi's Cloths", views: "6.52K views", active: true},
    {id: 9, pos: 9, name: "Nike", views: "33.8K views", active: false},
    {id: 10, pos: 10, name: "Zara", views: "19.4K views", active: false},
    {id: 11, pos: 11, name: "Gymshark", views: "3.22K views", active: false},
    {id: 12, pos: 12, name: "Brandy Melville", views: "17.5K views", active: false},
    {id: 13, pos: 13, name: "Ralph Lauren", views: "17.5K views", active: false},
    {id: 14, pos: 14, name: "Under Armour", views: "17.5K views", active: false},
    {id: 15, pos: 15, name: "Urban Outfitters", views: "21.5K views", active: false},
    {id: 16, pos: 16, name: "American Apparel", views: "11.3K views", active: false},
    {id: 17, pos: 17, name: "Vintage", views: "65.2K views", active: false},
    {id: 18, pos: 18, name: "The North Face", views: "7.5K views", active: false},
    {id: 19, pos: 19, name: "Laura Ashley", views: "12.5K views", active: false},
    {id: 20, pos: 20, name: "Louis Vuitton", views: "3.46K views", active: false}
];

const Suggestedsearches = () => {

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"text-2xl mx-60 px-1 my-6"}>Suggested searches</div>
                <div className={"sm:overflow-scroll lg:overflow-hidden flex flex-row gap-3 mx-5 lg:mx-60 cursor-pointer"}>
                    <div
                         className={"absolute z-50 bg-gray-900 bg-opacity-75 rounded-lg rotate-180 cursor-pointer"}>
                        <ChevronRightIcon className={"text-white w-5 h-5"}/>
                    </div>
                    {searches.map((search, index) => (
                        <div key={index}
                             className={"relative -z-50 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-100 shadow-inner-sm rounded-sm"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"font-medium"}>{search.name}</div>
                                <div className={"text-sm text-gray-600 font-medium"}>{search.views}</div>
                            </div>
                        </div>
                    ))}
                    <div
                         className={"absolute z-50 bg-gray-900 bg-opacity-75 rounded-lg cursor-pointer"}>
                        <ChevronRightIcon className={"text-white w-5 h-5"}/>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Suggestedsearches;