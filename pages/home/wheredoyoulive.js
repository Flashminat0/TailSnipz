import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Dialog} from "@headlessui/react";
import Flags from 'country-flag-icons/react/3x2'

const Wheredoyoulive = () => {
    const [openCountryModal, setOpenCountryModal] = useState(false);

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <AnimatePresence>
                        <Dialog
                            static
                            as={motion.div}
                            open={!openCountryModal}
                            className="relative z-10"
                            onClose={() => setOpenCountryModal(false)}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.4}
                            }}
                        >
                            <div className={"fixed inset-0 overflow-y-auto font-susty"}>
                                <div
                                    className="flex min-h-full items-center justify-center p-4 text-center bg-gray-700 bg-opacity-80">
                                    <motion.div
                                        key={`modal-for-email`}
                                        initial={{scale: 0.8, opacity: 0}}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            duration: 0.01,
                                        }}
                                        exit={{
                                            scale: 0,
                                            opacity: 0,
                                            duration: 0.2,
                                        }}
                                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className={`mb-5`}
                                        >
                                            <p className="text-xl font-medium leading-5 flex justify-between">
                                                Where do you live?
                                                <span
                                                    onClick={() => setOpenCountryModal(false)}
                                                    className={`text-lg mr-2 cursor-pointer text-susty`}>
                                                      Close
                                                </span>
                                            </p>

                                        </Dialog.Title>
                                        <div
                                            className={"mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-y-3"}>
                                            <div className={"flex flex-row gap-4"}>
                                                <Flags.NZ title={"New Zealand"} className={"w-6 h-6"}/>
                                                <div>New Zealand</div>
                                            </div>
                                            <div className={"flex flex-row gap-4"}>
                                                <Flags.AU title={"Australia"} className={"w-6 h-6"}/>
                                                <div>Australia</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Dialog>
                    </AnimatePresence>
            </>
        </div>
    );
};

export default Wheredoyoulive;