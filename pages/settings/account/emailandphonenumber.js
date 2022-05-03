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
                <div>
                    <div>
                        <h1>Email</h1>
                        <p>{user.email}</p>
                        <p className={`flex items-center`}>
                            <BadgeCheckIcon className={`h-5 w-5 mr-2 text-green-700`}/>
                            Verified
                        </p>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-500 focus:border-susty focus:bg-white`}>
                            Change Email
                        </motion.button>
                    </div>
                    <div>
                        <h1>Phone number</h1>
                        <p>{user.phone}</p>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-500 focus:border-susty focus:bg-white`}>
                            Change Phone number
                        </motion.button>
                    </div>
                    <p>Your phone number will only be used to help you log in. It won’t be made public or used for
                        marketing purposes.</p>
                </div>
            </>
        </div>
    );
};

export default EmailAndPhoneNumber;
