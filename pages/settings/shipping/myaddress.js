import React from 'react';
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/solid";

const Myaddress = () => {
    return (
        <div>
            <>
                <div className="w-full">
                    <div>My Address</div>
                    <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex justify-between w-full px-4 py-2 text-md font-bold text-left text-red-400 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                        <span>Add Address</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? '' : 'transform rotate-180'
                                            } w-5 h-5 text-red-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <div
                                            className={"grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-5"}>
                                            <div>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">Country</div>
                                                <div>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">Full name</div>
                                                <div>
                                                    <input type={"text"} className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Myaddress;