import React, {useRef} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import Popularitemcard from "../item/popularitemcard";


const Popularitemlayout = ({children}) => {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (

        <div
            className={"px-4 py-4 overflow-x-hidden overflow-y-hidden scroll-smooth min-w-full lg:max-w-full flex flex-row gap-3"}
            ref={ref}>
            <div className={`lg:hidden absolute -left-4 sm:left-2 lg:left-1/4`}>
                <div onClick={() => {
                    scroll(-100)
                }}
                     className={"absolute h-10 w-10 grid place-items-center left-4 top-36 bg-black bg-opacity-70 rounded-full cursor-pointer"}>
                    <ChevronLeftIcon className={"text-white w-10 h-10"}/>
                </div>
            </div>
            {children}
            <div
                className={"min-w-max lg:w-56 px-8 my-3 lg:my-0 bg-gray-200 inline-flex items-center place-content-center"}>
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