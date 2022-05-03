import React, {useState} from 'react';
import {BadgeCheckIcon} from '@heroicons/react/solid';
import {motion} from "framer-motion"

const EmailAndPhoneNumber = () => {
    const [user, setUser] = useState({
        email: 'wyasaslowe@gmail.com',
        phone: '+1 (917) 593-3243',
        verified: false
    });


    return (
        <div className={`h-screen w-screen grid place-content-center`}>
            <>
                <div className={`bg-gray-50`}>
                    <div className={`grid grid-cols-4 p-5 pr-0`}>
                        <div className={`col-span-3`}>
                            <p className={`text-xl`}>{user.email}</p>
                            <p className={`flex items-center`}>
                                <BadgeCheckIcon className={`h-5 w-5 mr-2 text-green-700`}/>
                                Verified
                            </p>
                        </div>
                        <div className={`grid place-items-center`}>
                            <motion.button
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                Change
                            </motion.button>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                    <div className={`grid grid-cols-4 p-5 pr-0`}>
                        <div className={`col-span-3`}>
                            <p className={`text-lg`}>{user.phone}</p>
                        </div>
                        <div className={`grid place-items-center`}>
                            <motion.button
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                Change
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 font-thin`}>
                    <p>Your phone number will only be used to help you log in. It won’t be made public or used for
                        marketing purposes.</p>
                </div>
            </>
        </div>
    );
};

export default EmailAndPhoneNumber;
