import {Dialog, Switch} from '@headlessui/react'
import React, {useState} from 'react'
import {AnimatePresence, motion} from "framer-motion"

const PrivacySettings = () => {

    const [allowPictures, setAllowPictures] = useState(false);
    const [notifyOwners, setNotifyOwners] = useState(false);
    const [allowThirdPartyTracking, setAllowThirdPartyTracking] = useState(false);
    const [allowToPersonalize, setAllowToPersonalize] = useState(false);
    const [enableDownloadData, setEnableDownloadData] = useState(false)

  return (
        <div className={""}>
            <>
                <div className={"w-full bg-gray-50"}>
                    <div className='p-3'>
                        <p>Privacy settings</p>
                    </div>
                    <div className={"grid grid-cols-5 gap-5 p-5"}>
                        <div className={"col-span-4"}>
                            <p className={"font-semibold"}>Allow Susty to use my pictures for marketing purposes</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={allowPictures}
                                onChange={setAllowPictures}
                                className={`${allowPictures ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowPictures ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                                pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>
                <div className={"w-full bg-gray-50"}>
                    <div className={"grid grid-cols-5 gap-5 p-5"}>
                        <div className={"col-span-4"}>
                            <p className={"font-semibold"}>Notify owners when I favorite their items</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={notifyOwners}
                                onChange={setNotifyOwners}
                                className={`${notifyOwners ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${notifyOwners ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                                pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>
                <div className={"w-full bg-gray-50"}>
                    <div className={"grid grid-cols-5 gap-5 p-5"}>
                        <div className={"col-span-4"}>
                            <p className={"font-semibold"}>Allow third-party tracking</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={allowThirdPartyTracking}
                                onChange={setAllowThirdPartyTracking}
                                className={`${allowThirdPartyTracking ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowThirdPartyTracking ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                                pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>
                <div className={"w-full bg-gray-50"}>
                    <div className={"grid grid-cols-5 gap-5 p-5"}>
                        <div className={"col-span-4"}>
                            <p className={"font-semibold"}>Allow Susty to personalize my feed and search results by evaluating <br></br> my preferences, settings, previous purchases  and usage of  <br></br>Susty website and app</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={allowToPersonalize}
                                onChange={setAllowToPersonalize}
                                className={`${allowToPersonalize ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowToPersonalize ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                                pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>

                <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}
                    onClick = {() => setEnableDownloadData(true)}
                >
                    <li className="group flex justify-between">
                        <div>
                            <p className={"font-semibold"}>Download account data</p>
                            <p className={"font-thin"}>Request account data</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                </div>
            </>

            <>
                <AnimatePresence>
                    {enableDownloadData && (
                        <Dialog
                            static
                            as={motion.div}
                            open={enableDownloadData}
                            className="relative z-10"
                            onClose={() => setEnableDownloadData(false)}
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
                                                &nbsp;
                                                <span
                                                    onClick={() => setEnableDownloadData(false)}
                                                    className={`mr-2 cursor-pointer`}>
                                                        Close
                                                </span>
                                            </p>
                                        </Dialog.Title>

                                        <div className='grid place-content-center'>                                        
                                            <div className=' p-4'>
                                                <h1 className='font-bold justify-items-center text-xl'>Download account data</h1>

                                                <p className='pt-8'>Your account data includes information that you’ve shared on your profile, your items, messages, and more.</p>
                                                <p className='pt-4'>It can take up to a month to process your request. You’ll then receive a copy of your account data via email. The data will be in HTML files contained within a ZIP file.</p>
                                                <p className='pt-4'>We’ll contact you at susty.co.nz@gmail.com to confirm your request.</p>

                                                <div className='pt-6'>
                                                    <div className={`grid place-items-center`}>
                                                        <motion.button
                                                            // onClick={() => setOpenPhoneModal(true)}
                                                            whileHover={{scale: 1.02}}
                                                            whileTap={{scale: 0.98}}
                                                            className={`inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                            Request data
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </motion.div>
                                </div>
                            </div>
                        </Dialog>
                )}
                </AnimatePresence>
            </> 

        </div>
  )
}

export default PrivacySettings