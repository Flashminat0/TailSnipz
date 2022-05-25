import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Dialog} from "@headlessui/react";
import {ArrowUpIcon, SupportIcon} from "@heroicons/react/solid";

const Modallayout = ({children, modalTopic}) => {
    const [openMailModal, setOpenMailModal] = useState(false);

    return (
        <>
            <AnimatePresence>
                {openMailModal && (
                    <Dialog
                        static
                        as={motion.div}
                        open={openMailModal}
                        className="relative z-10"
                        onClose={() => setOpenMailModal(false)}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {duration: 0.4}
                        }}
                    >
                        <div className="fixed inset-0 overflow-y-auto font-susty">
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
                                        <p className="text-lg font-medium leading-5 text-gray-500 flex justify-between">
                                            {modalTopic}
                                            <span
                                                onClick={() => setOpenMailModal(false)}
                                                className={`mr-2 cursor-pointer text-susty`}>
                                                      Close
                                                </span>
                                        </p>

                                    </Dialog.Title>
                                    {children}
                                </motion.div>
                            </div>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modallayout;