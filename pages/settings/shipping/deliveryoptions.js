import React, {useState} from 'react';
import {Switch} from '@headlessui/react'

const Deliveryoptions = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"w-full"}>
                    <div>Delivery options</div>
                    <div className={"mt-5 grid grid-cols-5 gap-2"}>
                        <div className={"col-span-1"}>
                            <img src={"https://pbs.twimg.com/profile_images/1407822951232131074/sw0Z3yII_400x400.png"}
                                 width={"50px"} height={"50px"} alt={""}/>
                        </div>
                        <div className={"col-span-3"}>
                            <p className={"font-semibold"}>The New Zealand Postal Service (NZPost)</p>
                            <p>This option includes tracking & insurance for your package</p>
                        </div>
                        <div className={"col-span-1 ml-auto"}>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-susty' : 'bg-gray-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <div className={"my-10 text-sm text-gray-500"}>Certain shipping options are enabled by default for you as a seller and cannot be turned off.</div>
                </div>
            </>
        </div>
    );
};

export default Deliveryoptions;