import {Switch} from '@headlessui/react';
import React, {useState} from 'react'

const highprioritynotifications = () => {

  const [enabledNewMessages, setEnabledNewMessages] = useState(false)
  const [enabledNewFeedback, setEnabledNewFeedback] = useState(false)
  const [enabledDiscountItems, setEnabledDiscountItems] = useState(false)

  return (
      <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <>
            <div className={"w-full bg-gray-50"}>
                <div className='p-3'>
                    <p>High-priority notifications</p>
                </div>
                <div className={"grid grid-cols-5 gap-5 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>New messages</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewMessages}
                            onChange={setEnabledNewMessages}
                            className={`${enabledNewMessages ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewMessages ? 'translate-x-9' : 'translate-x-0'}
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
                        <p className={"font-semibold"}>New feedback</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledNewFeedback}
                            onChange={setEnabledNewFeedback}
                            className={`${enabledNewFeedback ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledNewFeedback ? 'translate-x-9' : 'translate-x-0'}
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
                        <p className={"font-semibold"}>Discounted items</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabledDiscountItems}
                            onChange={setEnabledDiscountItems}
                            className={`${enabledDiscountItems ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabledDiscountItems ? 'translate-x-9' : 'translate-x-0'}
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

export default highprioritynotifications;