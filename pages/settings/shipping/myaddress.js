import React, {Fragment, useState} from 'react';
import {Disclosure, Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpIcon, SelectorIcon} from "@heroicons/react/solid";
import Flags from 'country-flag-icons/react/3x2'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const countries = [
    {id: 1, name: "New Zealand", flag: <Flags.NZ title={"New Zealand"} className={"w-6 h-6"}/>},
    {id: 2, name: "Australia", flag: <Flags.AU title={"Australia"} className={"w-6 h-6"}/>},
    {id: 3, name: "Select Country", flag: "Flag"}
];

const Myaddress = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[2]);

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className="w-full">
                    <div>My Address</div>
                    <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex justify-between w-full px-4 py-2 text-md font-bold text-left text-susty bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                        <span>Add Address</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? '' : 'transform rotate-180'
                                            } w-5 h-5 text-susty`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <div
                                            className={"grid grid-cols-1 grid-rows-7 gap-y-5"}>
                                            <div>
                                                <div
                                                    className="block px-4 text-md font-medium text-gray-700 my-1">Country
                                                </div>
                                                <div className={'flex gap-0 absolute rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty'}>
                                                    <Listbox value={selectedCountry.flag} onChange={setSelectedCountry}>
                                                        {({open}) => (<>
                                                            <div className="my-1.5 relative ml-4">
                                                                <Listbox.Button
                                                                    className="bg-white relative w-full border border-transparent pl-3 pr-6 py-1 text-left cursor-default sm:text-sm">
                                    <span
                                        className="block truncate">{selectedCountry.flag}</span>
                                                                    <span
                                                                        className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={false}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options
                                                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                        {countries.map((country) => (<Listbox.Option
                                                                            key={country.id}
                                                                            className={({active}) => classNames(active ? 'text-white bg-susty' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                                                            value={country}
                                                                        >
                                                                            {({selected, active}) => (<>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {country.flag}
                                                </span>
                                                                                {selected ? (<span
                                                                                    className={classNames(active ? 'text-white' : 'text-susty', 'absolute inset-y-0 right-0 flex items-center pr-4')}
                                                                                >
                                                    <CheckIcon className="h-5 w-5"
                                                               aria-hidden="true"/>
                                                </span>) : null}
                                                                            </>)}
                                                                        </Listbox.Option>))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>)}
                                                    </Listbox>
                                                    <Listbox value={selectedCountry} onChange={setSelectedCountry} className={"absolute"}>
                                                        {({open}) => (<>
                                                            <div className="mt-1 relative">
                                                                <Listbox.Button
                                                                    className="bg-white relative w-full border border-transparent pl-3 pr-16 py-2 text-left cursor-default sm:text-sm">
                                    <span
                                        className="block truncate">{selectedCountry.name}</span>
                                                                    <span
                                                                        className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options
                                                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                        {countries.map((country) => (<Listbox.Option
                                                                            key={country.id}
                                                                            className={({active}) => classNames(active ? 'text-white bg-susty' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                                                            value={country}
                                                                        >
                                                                            {({selected, active}) => (<>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {country.name}
                                                </span>
                                                                                {selected ? (<span
                                                                                    className={classNames(active ? 'text-white' : 'text-susty', 'absolute inset-y-0 right-0 flex items-center pr-4')}
                                                                                >
                                                    <CheckIcon className="h-5 w-5"
                                                               aria-hidden="true"/>
                                                </span>) : null}
                                                                            </>)}
                                                                        </Listbox.Option>))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>)}
                                                    </Listbox>
                                                </div>
                                            </div>
                                            <div className={"relative mt-14"}>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">Full
                                                    name
                                                </div>
                                                <div>
                                                    <input type={"text"}
                                                           className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"eg: John Snow"}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">
                                                    Address line 1
                                                </div>
                                                <div>
                                                    <input type={"text"}
                                                           className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"eg: 136, Hill Street"}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">
                                                    Address line 2 (Optional)
                                                </div>
                                                <div>
                                                    <input type={"text"}
                                                           className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"eg: Auckland"}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="block px-4 text-md font-medium text-gray-700 my-1">
                                                    Zip code
                                                </div>
                                                <div>
                                                    <input type={"number"}
                                                           className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                           placeholder={"eg: 0604"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Myaddress;