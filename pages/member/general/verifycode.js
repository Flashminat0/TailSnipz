import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

const Verifycode = () => {
    return (
        <div className={"w-screen h-screen grid place-content-center font-susty"}>
            <>
                <div className={"flex flex-col max-w-max bg-gray-50 p-4"}>
                    <div className={"flex flex-col gap-2 font-medium p-4"}>
                        <div className={"text-xl mx-auto"}>Verify your activity</div>
                        <div className={"text-gray-500"}>Please enter the 4-digit code sent to:</div>
                        <div>+64 (***) ***43</div>
                    </div>
                    <div className={"p-4"}>
                        <input type={"text"}
                               className={"px-4 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                               placeholder={"Enter code"}
                        />
                    </div>
                    <div className={"grid p-4"}>
                        <motion.button
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className={`flex justify-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                            Verify
                        </motion.button>
                    </div>
                    <div className={"flex flex-col text-xs font-medium"}>
                        <div className={"mx-auto text-susty hover:underline p-3"}>Request code</div>
                        <div className={"mx-auto p-3"}>Having trouble? <Link href={"/"}><a className={"text-susty hover:underline"}>Get help</a></Link></div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Verifycode;