import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {PlusIcon} from '@heroicons/react/outline';
import {Dialog} from "@headlessui/react";
import {ArrowUpIcon, SupportIcon} from "@heroicons/react/solid";

import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAvff4f3luKvQrV8k6KtblTAKX9XtEWSww",
    authDomain: "susty-49f6c.firebaseapp.com",
    projectId: "susty-49f6c",
    storageBucket: "susty-49f6c.appspot.com",
    messagingSenderId: "882000885893",
    appId: "1:882000885893:web:4223020107f86e0e7dd1ec",
    measurementId: "G-DY8CNFWR9S"
});


const Uploadphotos = () => {

    const [photosArray, setPhotosArray] = useState([]);
    const [openTipsModal, setOpenTipsModal] = useState(false);

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const storageRef = getStorage(firebaseApp);
        const fileRef = ref(storageRef, `images/${Date.now()}-${file.name}`);

        uploadBytes(fileRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                toast.success('Image upload Success!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });

                return url;
            }).then((url) => {
                setImageList((prev) => {
                    return [...prev, {
                        name: file.name,
                        url: url
                    }]
                })
            }).catch((error) => {
                toast.error('Image upload Failed!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            })
        })
    }

    return (
        <div>
            <>
                <div className={`bg-gray-50 w-54 px-5 pb-2 shadow rounded-sm`}>
                    <div className={`grid grid-cols-5 grid-rows-6 pb-2`}>
                        <div className={`flex col-span-5`}>
                            <p className={`self-center font-medium text-lg`}>Add up to 20 photos.&nbsp;
                                <span
                                    onClick={() => setOpenTipsModal(true)}
                                    className={`text-susty cursor-pointer`}>
                                    See photo tips.
                                </span>
                            </p>
                        </div>

                        <div
                            className={`col-span-5 border border-4 border-dashed w-full h-full grid place-items-center row-span-5 grid grid-cols-5 place-items-center`}>
                            <div className={`col-start-3`}>
                                
                                {/* <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center px-5 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50 my-32`}>
                                    <PlusIcon className={`h-4 w-4 `} aria-hidden={true}/>&nbsp;Add Photos
                                </motion.button> */}
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none "
                                >
                                    <span 
                                        className='inline-flex items-center px-5 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50 my-32 transition-all ease-in-out' 
                                    >
                                        <PlusIcon className={`h-4 w-4 `} aria-hidden={true}/>&nbsp;Add Photos
                                    </span>
                                
                                    <input id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={uploadFile}
                                        className="sr-only"
                                        />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <>
                <AnimatePresence>
                    {openTipsModal && (
                        <Dialog
                            static
                            as={motion.div}
                            open={openTipsModal}
                            className="relative z-10"
                            onClose={() => setOpenTipsModal(false)}
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
                                                <span>
                                                    {/*Tips Modal*/}
                                                </span>


                                                <span
                                                    onClick={() => setOpenTipsModal(false)}
                                                    className={`mr-2 cursor-pointer text-susty`}>
                                                      Close
                                                </span>
                                            </p>

                                        </Dialog.Title>
                                        <div className="mt-2">
                                            Nigga
                                        </div>

                                        <div className="mt-4 px-1 flex justify-between">
                                            <motion.button
                                                onClick={() => setOpenTipsModal(false)}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                Send confirmation email
                                                className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                <ArrowUpIcon className="w-4 h-4 mr-2"/>
                                                Send confirmation email
                                            </motion.button>
                                            <motion.button
                                                onClick={(x) => {
                                                    alert('Redirect to help page')
                                                }}
                                                whileHover={{scale: 1.02}}
                                                whileTap={{scale: 0.98}}
                                                className={`inline-flex items-center px-4 py-1.5 border border-red-300 shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                <SupportIcon className={`h-5 w-5 mr-2`}/>
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

export default Uploadphotos;
