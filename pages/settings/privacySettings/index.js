import { Switch } from '@headlessui/react'
import Link from 'next/link';
import React, {useState} from 'react'

const index = () => {

    const [allowPictures, setAllowPictures] = useState(false);
    const [notifyOwners, setNotifyOwners] = useState(false);
    const [allowThirdPartyTracking, setAllowThirdPartyTracking] = useState(false);
    const [allowToPersonalize, setAllowToPersonalize] = useState(false);

  return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
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
                                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowPictures ? 'translate-x-9' : 'translate-x-0'}
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
                            <p className={"font-semibold"}>Notify owners when I favorite their items</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={notifyOwners}
                                onChange={setNotifyOwners}
                                className={`${notifyOwners ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${notifyOwners ? 'translate-x-9' : 'translate-x-0'}
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
                            <p className={"font-semibold"}>Allow third-party tracking</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={allowThirdPartyTracking}
                                onChange={setAllowThirdPartyTracking}
                                className={`${allowThirdPartyTracking ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowThirdPartyTracking ? 'translate-x-9' : 'translate-x-0'}
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
                            <p className={"font-semibold"}>Allow Susty to personalize my feed and search results by evaluating <br></br> my preferences, settings, previous purchases  and usage of  <br></br>Susty website and app</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={allowToPersonalize}
                                onChange={setAllowToPersonalize}
                                className={`${allowToPersonalize ? 'bg-susty' : 'bg-gray-300'}
                                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${allowToPersonalize ? 'translate-x-9' : 'translate-x-0'}
                                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className={`my-1`}/>
                </div>

                <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50"}>
                    <Link href= '/settings/privacySettings/downloadaccountdata' >
                            <li className="group flex justify-between">
                                <div>
                                    <p className={"font-semibold"}>Download account data</p>
                                    <p className={"font-thin"}>Request account data</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                    </Link>
                </div>
            
        
            </>
        </div>
  )
}

export default index