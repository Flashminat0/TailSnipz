import React from 'react';
import {InformationCircleIcon, LocationMarkerIcon, EyeIcon, CameraIcon, ArrowRightIcon} from "@heroicons/react/outline";

const Messageoverview = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"bg-white mx-20 lg:mx-64 shadow-sm"}>
                    <div className={"flex flex-col"}>
                        <div className={"grid grid-cols-4 lg:grid-cols-6 border-b-2 border-gray-100 py-5 px-3 mb-8 shadow-sm"}>
                            <div className={"col-start-2 col-end-4 lg:col-start-4 lg:col-end-5 mx-auto lg:mx-0 text-susty text-lg"}>
                                John Smith
                            </div>
                            <InformationCircleIcon className={"col-start-4 lg:col-start-6 ml-auto w-6 h-6"}/>
                        </div>
                        <div className={"grid grid-cols-12 lg:grid-cols-10 gap-1 px-5"}>
                            <div className={"col-start-1 col-end-3 lg:col-end-2 ml-auto mr-4"}>
                                <img className={"inline-block h-12 w-12 rounded-full"}
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className={"col-start-3 col-end-12 lg:col-start-2 lg:col-end-7"}>
                                <div className={"p-4 rounded-lg shadow-sm border border-gray-100"}>
                                    <div className={"flex flex-col gap-2"}>
                                        <div className={"font-semibold"}>Hi! I'm John Smith</div>
                                        <div>
                                            susty94, your free
                                            bump is about to expire. Use it!

                                            Pick an item you want to sell quick, bump it and sell it up to 5 times
                                            faster.
                                            Are
                                            you ready to upload your first item on Vinted?

                                            To make selling even easier than it is already, we’re giving you 1 free
                                            bump,
                                            which
                                            you can activate within the next 7 days.

                                            A bump can make your item more visible to potential buyers.

                                            A bumped item appears high up in the newsfeed and catalog search results —
                                            once
                                            a
                                            day, for 3 days in a row.<br/>

                                            Team Vinted
                                        </div>
                                        <div className={"flex flex-row gap-4 text-gray-500 text-sm mt-4"}>
                                            <LocationMarkerIcon className={"w-5 h-5"}/>
                                            <span>New Zealand</span>
                                        </div>
                                        <div className={"flex flex-row gap-4 text-sm text-gray-500"}>
                                            <EyeIcon className={"w-5 h-5"}/>
                                            <span>Last seen 4 months ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"inline-flex place-content-center mt-5 mb-3 text-gray-400 text-sm font-medium"}>in 6 minutes</div>
                        <div className={"bg-gray-100 px-5 py-3 rounded-lg shadow-sm ml-auto mr-4"}>Hi, I will Check them.</div>
                        <div className={"inline-flex place-content-center mt-5 mb-3 text-susty font-medium"}>Translate this conversation</div>
                        <div className={"grid grid-cols-12 lg:grid-cols-10 gap-2 px-5 items-center border border-t-4 border-gray-100 relative"}>
                            <CameraIcon className={"col-start-1 col-end-2 lg:col-start-1 lg:col-end-2 relative w-12 h-8 mr-auto ml-4 mr-4 text-gray-400"}/>
                            <input className={"col-start-3 col-end-13 lg:col-start-2 lg:col-end-11 px-5 py-3 my-5 bg-gray-100 rounded-lg focus:outline-none"} placeholder={"Write a message here"}/>
                            <ArrowRightIcon className={"col-start-12 lg:col-start-10 w-5 h-5 pointer-events-none text-gray-300 font-semibold absolute"}/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Messageoverview;