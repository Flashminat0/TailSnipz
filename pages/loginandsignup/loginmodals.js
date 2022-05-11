import React, {useState} from 'react';
import {Dialog} from "@headlessui/react";
import {AnimatePresence, motion} from "framer-motion";

const Loginmodals = () => {
    const [openLoginModal, setOpenLoginModal] = useState(true);
    const [loginStatus, setLoginStatus] = useState(false);
    const [openLoginFormModal, setOpenLoginFormModal] = useState(false);
    const [forgottenPasswordStatus, setForgottenPasswordStatus] = useState(false);

    return (
        <div>
            <>
                <AnimatePresence>
                    <Dialog
                        static
                        as={motion.div}
                        open={openLoginModal}
                        className="relative z-10"
                        onClose={() => setOpenLoginModal(false)}
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
                                        className={`mb-2`}
                                    >
                                            <span
                                                className="flex justify-end text-xl font-medium leading-5 mr-2 cursor-pointer text-susty"
                                                onClick={() => setOpenLoginModal(false)}>
                                                      Close
                                            </span>
                                        {loginStatus === true ? <>
                                            <p className={"flex flex-col gap-3 text-3xl font-medium mt-5 pt-2"}>
                                                <div className={"mx-auto"}>Join and sell pre-loved</div>
                                                <div className={"mx-auto"}>clothes with no fees</div>
                                            </p>
                                        </> : <>
                                            <p className={"flex justify-center text-3xl font-medium mt-5 pt-2"}>
                                                Welcome back!
                                            </p>
                                        </>}

                                    </Dialog.Title>
                                    <div
                                        className={"my-4 grid grid-cols-1 grid-rows-10 gap-y-3"}>
                                        <div
                                            className="bg-white rounded w-full p-2">
                                            <button aria-label="Continue with facebook" role="button"
                                                    className="focus:outline-none focus:bg-gray-200 py-3 px-4 border rounded-lg border-gray-900 flex items-center w-full mt-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill={"none"}
                                                     width={48} height={48}
                                                     viewBox="0 0 48 48">
                                                    <path fill="#3f51b5"
                                                          d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                                                    <path fill="#fff"
                                                          d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"></path>
                                                </svg>
                                                <p className="text-lg font-medium ml-4 text-gray-700">Continue
                                                    with Facebook</p>
                                            </button>
                                            <button aria-label="Continue with google" role="button"
                                                    className="focus:outline-none focus:bg-gray-200 py-3 px-4 border rounded-lg border-gray-900 flex items-center w-full mt-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill={"none"}
                                                     width={48} height={48}
                                                     viewBox="0 0 48 48">
                                                    <path fill="#FFC107"
                                                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                    <path fill="#FF3D00"
                                                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                                    <path fill="#4CAF50"
                                                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                                    <path fill="#1976D2"
                                                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                                </svg>
                                                <p className="text-lg font-medium ml-4 text-gray-700">Continue
                                                    with Google</p>
                                            </button>
                                            <button aria-label="Continue with apple" role="button"
                                                    className="focus:outline-none focus:bg-gray-200 py-3 px-4 border rounded-lg border-gray-900 flex items-center w-full mt-4">
                                                <img
                                                    src="https://img.icons8.com/fluency-systems-filled/48/000000/mac-client.png"
                                                    width={"40"} height={"40"}/>
                                                <p className="text-lg font-medium ml-4 text-gray-700">Continue
                                                    with Apple</p>
                                            </button>
                                        </div>
                                        {loginStatus === true ? <>
                                            <div className={"flex flex-col gap-2"}>
                                                <div className={"text-lg text-gray-500 font-medium mx-auto"}>Or register
                                                    with <span className={"text-susty hover:underline"}>Email</span>
                                                </div>
                                                <div className={"text-lg text-gray-500 font-medium mx-auto"}>Already
                                                    have an account? <span onClick={() => {
                                                        setLoginStatus(false)
                                                    }} className={"text-susty hover:underline"}>Log in</span></div>
                                            </div>
                                        </> : <>
                                            <div className={"flex flex-col gap-2"}>
                                                <div className={"text-lg text-gray-500 font-medium mx-auto"}>Or log in
                                                    with <span onClick={() => {
                                                        setOpenLoginFormModal(true);
                                                        setOpenLoginModal(false)
                                                    }} className={"text-susty hover:underline"}>Email</span></div>
                                                <div className={"text-lg text-gray-500 font-medium mx-auto"}>Don't have
                                                    an account yet? <span onClick={() => {
                                                        setLoginStatus(true)
                                                    }} className={"text-susty hover:underline"}>Sign up</span></div>
                                            </div>
                                        </>}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Dialog>
                </AnimatePresence>
            </>

            <>
                <AnimatePresence>
                        <Dialog
                            static
                            as={motion.div}
                            open={openLoginFormModal}
                            className="relative z-10"
                            onClose={() => setOpenLoginFormModal(false)}
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
                                            className={`mb-10`}
                                        >
                                            <span
                                                className="flex justify-end text-xl font-medium leading-5 mr-2 cursor-pointer text-susty"
                                                onClick={() => setOpenLoginFormModal(false)}>
                                                      Close
                                            </span>
                                            {forgottenPasswordStatus === true ? <>
                                                <p className={"flex justify-center text-3xl font-medium mt-5 pt-2"}>
                                                    Forgot your password
                                                </p>
                                            </> :<>
                                                <p className={"flex justify-center text-3xl font-medium mt-5 pt-2"}>
                                                    Log in
                                                </p>
                                            </>}
                                        </Dialog.Title>
                                        <div
                                            className={"my-4 grid grid-cols-1 grid-rows-12 gap-y-4"}>
                                            {forgottenPasswordStatus === true ? <>
                                                <input type={"email"}
                                                       className={"px-8 py-1.5 min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                       placeholder={"Enter your email address"}
                                                />
                                            </> :<>
                                                <div className={"flex flex-col gap-4"}>
                                                    <input type={"text"}
                                                           className={"px-8 py-1.5 min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"Email or username"}
                                                    />
                                                    <input type={"password"}
                                                           className={"px-8 py-1.5 min-w-full rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"Password"}
                                                    />
                                                </div>
                                            </>}
                                            <div className="mt-6">
                                                <motion.button
                                                    whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}
                                                    Send confirmation email
                                                    className={`flex justify-center min-w-full px-28 py-3.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                    Continue
                                                </motion.button>
                                            </div>
                                            {forgottenPasswordStatus === true ? <>
                                            </> : <>
                                                <div className={"flex flex-col gap-2 mt-3"}>
                                                    <div onClick={()=>{setForgottenPasswordStatus(true)}}
                                                         className={"text-lg font-medium mx-auto text-susty hover:underline"}>Forgotten
                                                        your password?
                                                    </div>
                                                    <div
                                                        className={"text-lg font-medium mx-auto text-susty hover:underline"}>Having
                                                        trouble?
                                                    </div>
                                                </div>
                                            </>}
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

export default Loginmodals;