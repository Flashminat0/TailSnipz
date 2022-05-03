import React, {Fragment, useState} from 'react';
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {
    BookmarkAltIcon,
    CheckIcon,
    ChevronUpIcon,
    ChevronRightIcon,
    SelectorIcon
} from "@heroicons/react/solid";
import Flags from 'country-flag-icons/react/3x2'
import {AnimatePresence, motion} from "framer-motion";

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
    const [openAddressModal, setOpenAddressModal] = useState(false);

    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className="w-full">
                    <div>My Address</div>
                    <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                        <div className={"flex items-center justify-between px-6 py-5 hover:bg-gray-100"}>
                            <p className={"mr-36"}>Add Address</p>
                            <ChevronRightIcon className={"w-5 h-5"} onClick={() => setOpenAddressModal(true)}/>
                        </div>
                        <>
                            <AnimatePresence>
                                {openAddressModal && (
                                    <Dialog
                                        static
                                        as={motion.div}
                                        open={openAddressModal}
                                        className="relative z-10"
                                        onClose={() => setOpenAddressModal(false)}
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
                                                            Add Address
                                                            <span
                                                                onClick={() => setOpenAddressModal(false)}
                                                                className={`mr-2 cursor-pointer`}>
                                                      Close
                                                </span>
                                                        </p>

                                                    </Dialog.Title>

                                                    <div
                                                        className={"my-4 grid grid-cols-1 grid-rows-5 gap-y-4"}>
                                                        <div>
                                                            <div
                                                                className="block px-4 text-md font-medium text-gray-700 my-1">Country
                                                            </div>
                                                            <div
                                                                className={'flex gap-0 absolute rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-susty focus:border-susty'}>
                                                                <Listbox value={selectedCountry.flag}
                                                                         onChange={setSelectedCountry}>
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
                                                                                    {countries.map((country) => (
                                                                                        <Listbox.Option
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
                                                                <Listbox value={selectedCountry}
                                                                         onChange={setSelectedCountry}
                                                                         className={"absolute"}>
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
                                                                                    {countries.map((country) => (
                                                                                        <Listbox.Option
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
                                                        <div>
                                                            <div
                                                                className="block px-4 text-md font-medium text-gray-700 my-1">Full
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
                                                            <div
                                                                className="block px-4 text-md font-medium text-gray-700 my-1">
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
                                                            <div
                                                                className="block px-4 text-md font-medium text-gray-700 my-1">
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
                                                            <div
                                                                className="block px-4 text-md font-medium text-gray-700 my-1">
                                                                Zip code
                                                            </div>
                                                            <div>
                                                                <input type={"number"} min={0} max={9999}
                                                                       className={"px-8 py-1.5 rounded-md shadow-sm border border-gray-300 focus:border-susty focus:ring-susty focus:ring-offset-susty"}
                                                                       placeholder={"eg: 0604"}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 px-1 flex flex-col">
                                                        <motion.button
                                                            onClick={() => setOpenAddressModal(false)}
                                                            whileHover={{scale: 1.02}}
                                                            whileTap={{scale: 0.98}}
                                                            Send confirmation email
                                                            className={`inline-flex items-center px-28 py-1.5 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                            <BookmarkAltIcon className="w-5 h-5 mr-2 items-center"/>
                                                            Save Changes
                                                        </motion.button>
                                                        <motion.button
                                                            onClick={(x) => {
                                                                alert('Redirect to help page')
                                                            }}
                                                            whileHover={{scale: 1.02}}
                                                            whileTap={{scale: 0.98}}
                                                            className={`inline-flex items-center px-40 py-1.5 border border-red-300 shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                            Cancel
                                                        </motion.button>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </Dialog>
                                )}</AnimatePresence>
                        </>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Myaddress;