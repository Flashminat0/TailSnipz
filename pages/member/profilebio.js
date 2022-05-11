import React from 'react';
import {SupportIcon} from "@heroicons/react/solid";
import {motion} from "framer-motion";
import {
    PencilIcon,
    LocationMarkerIcon,
    ClockIcon,
    RssIcon,
    CheckCircleIcon,
    ChevronRightIcon
} from "@heroicons/react/outline";
import Link from "next/link";

const Profilebio = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <div className={"hidden sm:block"}>
                <div className={"grid grid-cols-6 lg:grid-cols-5 gap-1 lg:gap-3 mt-5"}>
                    <div className={"col-span-2 lg:col-span-1"}>
                        <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} width={"200"}
                             height={"200"} className={"rounded-full mx-3"}/>
                    </div>
                    <div className={"col-span-4 lg:col-span-4"}>
                        <div className={"grid grid-rows-2 lg:flex lg:justify-between items-center pb-5"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"text-2xl font-medium"}>susty94</div>
                                <div className={"text-gray-500"}>No reviews yet</div>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center px-4 py-1.5 mr-5 border border-red-300 shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    <PencilIcon className={`h-5 w-5 mr-2`}/>
                                    Edit profile
                                </motion.button>
                            </div>
                        </div>
                        <div className={"text-gray-500 text-xs grid grid-cols-5 lg:grid-cols-5 gap-3"}>
                            <div className={"col-span-3 lg:col-span-1 col-start-1"}>
                                <div className={"my-3"}>About:</div>
                                <div className={"flex flex-col gap-1"}>
                                    <div className={"flex flex-row gap-1"}>
                                        <LocationMarkerIcon className={"w-5 h-5"}/>
                                        <div className={"text-base"}>NEW YORK, NY, United States</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <ClockIcon className={"w-5 h-5"}/>
                                        <div className={"text-base"}>Last seen 1 hour ago</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <RssIcon className={"w-5 h-5"}/>
                                        <div className={"text-base"}><Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> following</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-1 col-start-4 lg:col-span-1 lg:col-start-2"}>
                                <div className={"my-3"}>Verified info:</div>
                                <div className={"flex flex-row gap-1"}>
                                    <CheckCircleIcon className={"w-5 h-5"}/>
                                    <div className={"text-base"}>Email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"block sm:hidden divide-y-2 divide-gray-200 mx-2 px-6"}>
                <div className={"grid grid-cols-6 gap-3 items-center py-2 my-2"}>
                    <div className={"col-span-1"}>
                        <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} width={"50"} height={"50"} className={"rounded-full items-center"}/>
                    </div>
                    <div className={"col-span-4 font-medium pr-5"}>
                        <div className={"flex flex-col gap-1"}>
                            <div className={"text-2xl font-medium"}>susty94</div>
                            <div className={"text-gray-500"}>No reviews yet</div>
                        </div>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <ChevronRightIcon className={"w-5 h-5 text-gray-400"}/>
                    </div>
                </div>
                <div className={"flex flex-col gap-0.5 text-gray-500 py-4"}>
                    <div className={"flex flex-row gap-1"}>
                        <CheckCircleIcon className={"w-5 h-5"}/>
                        <div className={"text-base"}>Email</div>
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <LocationMarkerIcon className={"w-5 h-5"}/>
                        <div className={"text-base"}>NEW YORK, NY, United States</div>
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <RssIcon className={"w-5 h-5"}/>
                        <div className={"text-base"}><Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> following</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilebio;