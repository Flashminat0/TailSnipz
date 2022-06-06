import {Switch} from '@headlessui/react';
import React, {useState} from 'react'

const othernotifications = () => {

    const [enabledFavItems, setEnabledFavItems] = useState(false);
    const [enabledNewFollowers, setEnabledNewFollowers] = useState(false);
    const [enabledNewItems, setEnabledNewItems] = useState(false);
    const [enabledMentions, setEnabledMentions] = useState(false);
    const [enabledForumMessages, setEnabledForumMessages] = useState(false);

  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <>
            <div className={"w-full bg-gray-50"}>
                <div className='p-3'>
                    <p>Other notifications</p>
                </div>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>Favorited Items</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledFavItems}
                            onChange={setEnabledFavItems}
                            className={`${enabledFavItems ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledFavItems ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
                <hr className={`my-1`}/>
            </div>
            <div className={"w-full bg-gray-50"}>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>New followers</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewFollowers}
                            onChange={setEnabledNewFollowers}
                            className={`${enabledNewFollowers ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewFollowers ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
                <hr className={`my-1`}/>
            </div>
            <div className={"w-full bg-gray-50"}>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>New items</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewItems}
                            onChange={setEnabledNewItems}
                            className={`${enabledNewItems ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewItems ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
                <hr className={`my-1`}/>
            </div>
            <div className={"w-full bg-gray-50"}>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>Mentions</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledMentions}
                            onChange={setEnabledMentions}
                            className={`${enabledMentions ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledMentions ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
                <hr className={`my-1`}/>
            </div>
            <div className={"w-full bg-gray-50"}>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>Susty Team forum messages</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledForumMessages}
                            onChange={setEnabledForumMessages}
                            className={`${enabledForumMessages ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledForumMessages ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
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

export default othernotifications