import {Switch} from '@headlessui/react'
import React, {useState} from 'react'

const EmailNotifications = () => {

    const [enabledNewsletter, setEnabledNewsletter] = useState(false)
    const [enabledAnnouncements, setEnabledAnnouncements] = useState(false)

    return (
        <div className={""}>
            <>
                <div className={"w-full bg-gray-50"}>
                    <p className='p-3 text-sm text-gray-500'>News</p>
                    <div className={"grid grid-cols-5 gap-5 p-5"}>
                        <div className={"col-span-4"}>
                            <p className={"font-semibold"}>Susty newsletter</p>
                            <p className={"font-thin"}>Find out about the latest news and offers</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={enabledNewsletter}
                                onChange={setEnabledNewsletter}
                                className={`${enabledNewsletter ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${enabledNewsletter ? 'translate-x-[1.855rem]' : 'translate-x-0'}
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
                            <p className={"font-semibold"}>Feature announcements</p>
                            <p className={"font-thin"}>Get information on useful new features</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={enabledAnnouncements}
                                onChange={setEnabledAnnouncements}
                                className={`${enabledAnnouncements ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${enabledAnnouncements ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>


            </>
        </div>
    )
}

export default EmailNotifications