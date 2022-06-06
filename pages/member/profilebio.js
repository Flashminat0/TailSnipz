import React from 'react';
import {motion} from "framer-motion";
import {
    CheckCircleIcon,
    ChevronRightIcon,
    ClockIcon,
    LocationMarkerIcon,
    PencilIcon,
    RssIcon
} from "@heroicons/react/outline";
import Link from "next/link";

const Profilebio = () => {
    return (
        <div className={"h-screen w-screen font-susty"}>
            <div className={"hidden md:block"}>
                <div className={"grid grid-cols-10 lg:grid-cols-11 gap-1 lg:gap-5 my-5 items-center"}>
                    <div className={"col-span-3 lg:col-span-2"}>
                        <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} width={"196rem"}
                             height={"196rem"} className={"rounded-full mx-3"}/>
                    </div>
                    <div className={"col-span-7 lg:col-span-9"}>
                        <div className={"grid grid-rows-2 lg:flex lg:justify-between items-center pb-5"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"text-2xl font-medium"}>susty94</div>
                                <div className={"text-sm text-gray-500"}>No reviews yet</div>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center px-4 py-1.5 mr-16 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    <PencilIcon className={`h-5 w-5 mr-2`}/>
                                    Edit profile
                                </motion.button>
                            </div>
                        </div>
                        <div className={"text-gray-500 text-xs grid grid-cols-6 lg:grid-cols-7 gap-3"}>
                            <div className={"col-span-3 lg:col-span-2"}>
                                <div className={"my-3"}>About:</div>
                                <div className={"flex flex-col gap-1"}>
                                    <div className={"flex flex-row gap-1"}>
                                        <LocationMarkerIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>NEW YORK, NY, United States</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <ClockIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>Last seen 1 hour ago</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <RssIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}><Link href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                                            href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> following
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-3 lg:col-span-5"}>
                                <div className={"my-3"}>Verified info:</div>
                                <div className={"flex flex-row gap-1"}>
                                    <CheckCircleIcon className={"w-5 h-5"}/>
                                    <div className={"text-sm"}>Email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"block md:hidden divide-y-2 divide-gray-200 px-4"}>
                <div className={"flex flex-row gap-3 items-center py-2 my-2"}>
                    <div className={"flex flex-row gap-3 items-center"}>
                        <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} width={"50"}
                             height={"50"} className={"rounded-full items-center"}/>
                            <div className={"flex flex-col gap-1 font-medium pr-5"}>
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
                        <div className={"text-sm"}>Email</div>
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <LocationMarkerIcon className={"w-5 h-5"}/>
                        <div className={"text-sm"}>NEW YORK, NY, United States</div>
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <RssIcon className={"w-5 h-5"}/>
                        <div className={"text-sm"}><Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                            href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> following
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilebio;