import React from 'react';
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";

const Becomeaseller = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"flex flex-col gap-6 mx-[20rem]"}>
                    <p className={"capitalize text-3xl mx-auto py-5"}>Become a Seller</p>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-sm"}>Store Name</p>
                        <input type="text"
                               className={"px-2 py-1.5 max-w-[44rem] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty shadow-sm rounded-lg"}/>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <p className={"text-sm"}>Store Logo</p>
                        <div className="flex items-center">
                            <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                             <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                             <path
                                 d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                             </svg>
                             </span>
                            <label
                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-susty"
                            >
                                <span>Change</span>
                                <input type="file" className={"sr-only"}/>
                            </label>
                        </div>
                    </div>
                    <p className={"text-gray-500 text-xs leading-relaxed"}>By registering, I confirm that I accept Susty's <Link href="#"><a className={"text-susty hover:underline"}
                    >Terms & Conditions,</a></Link> have read the <Link href="#"><a className={"text-susty hover:underline"}>Privacy Policy,</a></Link>
                        am at least 18 years old and agree to receive special offers and promotions.</p>
                    <div className={"flex flex-col gap-2 justify-center"}>
                        <AnimatePresence>
                            <div className={`grid place-items-center`}>
                                <motion.button
                                    onClick={() => setOpenMailModal(true)}
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    Agree Seller Policy & Create Store
                                </motion.button>
                            </div>
                        </AnimatePresence>
                        <Link href="#"><a className={"text-xs text-susty mx-auto hover:underline"}>Having trouble?</a></Link>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Becomeaseller;