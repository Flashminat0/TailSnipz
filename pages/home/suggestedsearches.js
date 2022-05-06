import React from 'react';
import {ChevronRightIcon} from "@heroicons/react/solid";

const searches = [
    {id: 1, name: "Victoria's Secret", views: "17.5K views"},
    {id: 2, name: "Michael Kors", views: "10.7K views"},
    {id: 3, name: "Vans", views: "6.78K views"},
    {id: 4, name: "adidas", views: "10.9K views"},
    {id: 5, name: "Shein", views: "32.1K views"},
    {id: 6, name: "Ray-Ban", views: "1.45K views"},
    {id: 7, name: "Converse Shoes", views: "3.64K views"},
    {id: 8, name: "Levi's Cloths", views: "6.52K views"},
    {id: 9, name: "Nike", views: "33.8K views"},
    {id: 10, name: "Zara", views: "19.4K views"},
    {id: 11, name: "Gymshark", views: "3.22K views"},
    {id: 12, name: "Brandy Melville", views: "17.5K views"},
    {id: 13, name: "Ralph Lauren", views: "17.5K views"},
    {id: 14, name: "Under Armour", views: "17.5K views"},
    {id: 15, name: "Urban Outfitters", views: "21.5K views"},
    {id: 16, name: "American Apparel", views: "11.3K views"},
    {id: 17, name: "Vintage", views: "65.2K views"},
    {id: 18, name: "The North Face", views: "7.5K views"},
    {id: 19, name: "Laura Ashley", views: "12.5K views"},
    {id: 20, name: "Louis Vuitton", views: "3.46K views"},
];

const Suggestedsearches = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"text-2xl mx-60 px-1 my-6"}>Suggested searches</div>
                <div className={"flex flex-row gap-3 mx-10 lg:mx-60"}>
                    <div className={"z-10 bg-gray-900 bg-opacity-75 bg-transparent rounded-lg rotate-180"}>
                        <ChevronRightIcon className={"text-white w-5 h-5"}/>
                    </div>
                    {searches.map((search)=>(
                        <div className={"px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-100 shadow-inner-sm rounded-sm hover:cursor-pointer"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"font-medium"}>{search.name}</div>
                                <div className={"text-sm text-gray-600 font-medium"}>{search.views}</div>
                            </div>
                        </div>
                    ))}
                    <div className={"z-10 bg-gray-900 bg-opacity-75 bg-transparent rounded-lg"}>
                        <ChevronRightIcon className={"text-white w-5 h-5"}/>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Suggestedsearches;