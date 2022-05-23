import React, {useState} from 'react';
import {Switch} from '@headlessui/react'

const Deliveryoptions = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"w-full p-4 bg-gray-50"}>
                    <div className={"text-gray-500 flex flex-col text-sm"}>Delivery options</div>
                    <div className={"pt-5 flex flex-row gap-3 items-center"}>
                        <div>
                            <img src={"https://pbs.twimg.com/profile_images/1407822951232131074/sw0Z3yII_400x400.png"}
                                 width={"60px"} height={"60px"} alt={"NZPost picture"}/>
                        </div>
                        <div>
                            <p className={"text-sm sm:text-base font-semibold"}>The New Zealand Postal Service (NZPost)</p>
                            <p className={"text-sm text-gray-600"}>This option includes tracking & insurance for your package</p>
                        </div>
                        <div className={"ml-auto"}>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-susty' : 'bg-gray-300'}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    aria-hidden="true"
                                    className={`${enabled ? 'translate-x-[1.855rem]' : 'translate-x-0'}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
                <div className={"p-5 text-xs text-gray-500"}>Certain shipping options are enabled by default for
                    you as a seller and cannot be turned off.
                </div>
            </>
        </div>
    );
};

export default Deliveryoptions;