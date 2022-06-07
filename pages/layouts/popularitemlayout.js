import React, {useRef} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";


const Popularitemlayout = ({children}) => {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (

        <div
            className={"overflow-x-hidden overflow-y-hidden scroll-smooth max-w-[36rem] sm:max-w-[42rem] lg:max-w-[80rem] flex flex-row gap-3  "}
            ref={ref}>
            <div className={`lg:hidden absolute -left-[0.5rem] lg:left-[1rem]`}>
                <div onClick={() => {
                    scroll(-100)
                }}
                     className={"absolute h-[2.5rem] w-[2.5rem] grid place-items-center left-[1rem] top-[9rem] bg-black bg-opacity-70 rounded-full cursor-pointer"}>
                    <ChevronLeftIcon className={"text-white w-[2.5rem] h-[2.5rem]"}/>
                </div>
            </div>
            {children}
            <div
                className={"min-w-max lg:w-[12rem] px-8 my-3 lg:my-0 bg-gray-200 inline-flex items-center place-content-center"}>
                <div className={"text-gray-500"}>See all popular items</div>
            </div>
            <div className={`lg:hidden absolute -right-[0.5rem] lg:right-[1rem]`}>
                <div onClick={() => {
                    scroll(100)
                }}
                     className={"absolute h-[2.5rem] w-[2.5rem] place-items-center right-[1rem] top-[9rem] bg-black bg-opacity-70 rounded-full cursor-pointer"}>
                    <ChevronRightIcon className={"text-white w-[2.5rem] h-[2.5rem]"}/>
                </div>
            </div>
        </div>
    );
};

export default Popularitemlayout;