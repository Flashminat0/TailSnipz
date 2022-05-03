import React, {useState, Fragment} from 'react';
import {BadgeCheckIcon} from '@heroicons/react/solid';
import {AnimatePresence, motion} from "framer-motion"
import {Dialog, Transition} from '@headlessui/react'

const EmailAndPhoneNumber = () => {
    const [user, setUser] = useState({
        email: 'wyasaslowe@gmail.com',
        phone: '+1 (917) 593-3243',
        verified: false
    });

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

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
                                onClick={openModal}
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
                            <p className={`text-lg`}>
                                {/*TODO change this to **** after the APIs are made*/}
                                {user.phone}
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
                </div>
                <div className={`mx-2 font-thin`}>
                    <p>Your phone number will only be used to help you log in. It won’t be made public or used for
                        marketing purposes.</p>
                </div>
            </>
            <>
                <AnimatePresence>
                    {isOpen && (
                        <Dialog
                            static
                            as={motion.div}
                            open={isOpen}
                            className="relative z-10"
                            onClose={closeModal}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.4}
                            }}
                        >
                            <div className="fixed inset-0 overflow-y-auto">
                                <div
                                    className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                    <motion.div
                                        key={`modal`}
                                        initial={{opacity: 0, y: -10}}
                                        animate={{
                                            scale: [0.5, 1.2, 1.1, 1],
                                            opacity: [0.7, 1],
                                            y: [-10, 0],
                                        }}
                                        exit={{
                                            scale: 1,
                                            opacity: [1, 0],
                                            y: [0, -10000],
                                            duration: 0.2,
                                        }}
                                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Confirm change
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-base text-gray-500">
                                                You need to confirm <span
                                                className={`font-semibold`}>
                                                {user.email}</span> is your email address before you can update it.
                                            </p>
                                        </div>

                                        <div className="mt-4 px-1 flex justify-between">
                                            <motion.button
                                                onClick={closeModal}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                Send confirmation email
                                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                Send confirmation email
                                            </motion.button>
                                            <motion.button
                                                onClick={(x) => {
                                                    alert('Redirect to help page')
                                                }}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                Help
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Dialog>
                    )}</AnimatePresence>
            </>

        </div>
    );
};

export default EmailAndPhoneNumber;
