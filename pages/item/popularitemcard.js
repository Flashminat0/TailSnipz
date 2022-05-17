import React, {useState} from 'react';
import {InformationCircleIcon} from "@heroicons/react/outline";

const Popularitemcard = ({src, alt, price, size, brand}) => {
    const [isFavourite, setIsFavourite] = useState(false);
    let favCount = 2;

    return (
        <div className={"grid place-content-center font-susty"}>
            <>
                <div className={"box-content w-56 min-h-max"}>
                    <div><img className={"h-80 object-fit"}
                              src={src} alt={alt}
                              width={"full"} height={"full"}/></div>
                    <div className={"p-3 grid grid-cols-3"}>
                        <div className={"col-start-1 col-end-3"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"flex flex-row gap-1"}>
                                    <div className={"font-semibold text-sm"}>${price}</div>
                                    <InformationCircleIcon className={"w-6 h-6 text-gray-500 text-sm"}/>
                                </div>
                                <div className={"text-gray-500 text-sm"}>{size}</div>
                                <div className={"text-gray-500 text-sm"}>{brand}</div>
                            </div>
                        </div>
                        <div className={"col-start-3 col-end-4"}>
                            <div className={"flex flex-row justify-end items-center gap-0.5 text-gray-400"}>
                                {isFavourite === true ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900"
                                         viewBox="0 0 20 20" onClick={() => {
                                        setIsFavourite(false)
                                    }}
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </> : <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         onClick={() => {
                                             setIsFavourite(true)
                                         }}
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </>}
                                {isFavourite === true ? <>
                                    <span className={"text-gray-500 font-medium text-sm"}>{favCount + 1}</span>
                                </> : <>
                                    <span className={"text-gray-500 font-medium text-sm"}>{favCount}</span>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Popularitemcard;