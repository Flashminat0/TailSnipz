import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

const Cookienotice = () => {
    return (
        <div className={"w-screen h-screen font-susty -z-50 bg-opacity-50 bg-zinc-900"}>
            <>
                <div
                    className={"fixed inset-x-0 bottom-0 bg-white max-h-90% lg:max-h-64 overflow-x-hidden overflow-y-auto vertical-align-content z-50 px-5 lg:px-44 py-8 border border-x-4 border-y border-white focus:border-black"}>
                    <div className={"flex flex-col lg:grid lg:grid-cols-7 gap-4"}>
                        <div className={"flex flex-col gap-2 lg:col-start-2 lg:col-end-4"}>
                            <div className={"font-medium text-base"}>Your privacy preferences</div>
                            <span className={"text-gray-600 text-sm"}>We and our partners store and/or access information on a device, e.g. unique identifiers in cookies, in order to process personal data. You can accept or manage your preferences, including your right to object if you have a legitimate interest. Please click on “Manage cookies” or visit the privacy policy page at any time. These preferences are signalled to our partners and will not affect your Susty experience.<Link
                                href={"/"}><a className={"text-susty hover:underline"}> Cookie policy</a></Link> </span>
                        </div>
                        <div className={"flex flex-col gap-2 lg:col-start-4 lg:col-end-6"}>
                            <div className={"font-medium text-base"}>We process data for the following purposes:</div>
                            <span className={"text-gray-600 text-sm"}>Use precise geolocation data. Actively scan device characteristics for identification. Store and/or access information on a device. Personalised ads and content, ad and content measurement, audience insights and product development. <Link
                                href={"/"}><a
                                className={"text-susty hover:underline"}> List of partners (vendors)</a></Link> </span>
                        </div>
                        <div className={"flex flex-col gap-3 my-4 lg:col-start-6 lg:col-end-7"}>
                            <div className={`grid`}>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`flex justify-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    Accept All
                                </motion.button>
                            </div>
                            <div className={`grid`}>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`flex justify-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    Reject All
                                </motion.button>
                            </div>
                            <div className={`grid`}>
                                <button className={"text-susty lg:text-sm hover:text-red-300"}>Manage cookies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Cookienotice;