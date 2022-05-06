import React from 'react';
import {ArrowRightIcon, CameraIcon} from "@heroicons/react/outline";

const Sendnewmessage = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"w-full bg-white shadow-sm"}>
                    <div className={"text-gray-400 ml-2 font-medium uppercase"}>New Message</div>
                    <div className={"grid grid-cols-12 mt-5 px-5 pt-5 pb-96 drop-shadow-xl"}>
                        <div className={"col-start-1"}>To:</div>
                        <div className={"col-start-9"}>UserName</div>
                    </div>
                    <div className={"grid grid-cols-12 lg:grid-cols-10 gap-2 items-center border border-t-4 border-gray-100 pr-4 relative"}>
                        <CameraIcon className={"col-start-1 col-end-2 lg:col-start-1 lg:col-end-2 relative w-12 h-8 mr-auto ml-4 mr-4 text-gray-400"}/>
                        <input className={"col-start-3 col-end-13 lg:col-start-2 lg:col-end-11 px-5 py-3 my-5 bg-gray-100 rounded-lg focus:outline-none"} placeholder={"Write a message here"}/>
                        <ArrowRightIcon className={"col-start-12 lg:col-start-10 w-5 h-5 pointer-events-none text-gray-300 font-semibold absolute"}/>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Sendnewmessage;