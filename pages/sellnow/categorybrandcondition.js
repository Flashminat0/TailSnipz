import React, {Fragment, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    {name: 'New with tags', username: 'A brand-new, unused item with tags attached or in the original packaging.'},
    {name: 'New with tags', username: 'A brand-new, unused item without tags or original packaging.'},
    {name: 'Very good', username: 'A lightly used item that may have slight imperfections, but still looks great. Include photos and descriptions of any flaws in your listing.'},
    {name: 'Good', username: 'A used item that may show imperfections and signs of wear. Include photos and descriptions of flaws in your listing.'},
    {name: 'Satisfactory', username: 'A frequently used item with imperfections and signs of wear. Include photos and descriptions of flaws in your listing.'},
]


const Categorybrandcondition = () => {
    const [selected, setSelected] = useState(people[3])


    return (
        <div className={`h-screen w-screen grid place-content-center font-susty`}>
            <>
                <div className={`bg-gray-50 w-54 p-4 shadow rounded-sm`}>
                    <div className={`grid grid-cols-5 pb-2`}>
                        <p className={`font-medium text-lg`}>Category</p>
                        <input
                            name="brand"
                            id="title"
                            className="pl-2 focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10 col-start-3 col-span-3"
                            placeholder="Category"
                        />
                    </div>

                    <hr/>

                    <div className={`grid grid-cols-5 py-2`}>
                        <p className={`font-medium text-lg`}>Brand</p>
                        <input
                            name="brand"
                            id="brand"
                            className="pl-2 focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10 col-start-3 col-span-3"
                            placeholder="Brand"
                        />
                    </div>

                    <hr/>

                    <div className={`grid grid-cols-5 pt-2`}>
                        <p className={`font-medium text-lg`}>Condition</p>
                        <div className={`col-start-3 col-span-3`}>
                            <Listbox value={selected} onChange={setSelected}>
                                {({open}) => (
                                    <>
                                        <div className="mt-1 relative">
                                            <Listbox.Button
                                                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-susty focus:border-susty sm:text-sm">
                                               <span className="w-full inline-flex truncate">
                                                   <span className="truncate">{selected.name}</span>
                                                   {/*<span*/}
                                                   {/*    className="ml-2 truncate text-gray-500">{selected.username}</span>*/}
                                               </span>
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
                                                    {people.map((person) => (
                                                        <div>
                                                            <div className={``}>
                                                                <Listbox.Option
                                                                    key={person.username}
                                                                    className={({active}) =>
                                                                        classNames(active ? 'text-white bg-susty' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')
                                                                    }
                                                                    value={person}
                                                                >
                                                                    {({selected, active}) => (
                                                                        <>
                                                                            <div className="grid">
                                                                                <div
                                                                                    className={classNames(selected ? 'font-semibold' : 'font-medium', 'antialiased')}>{person.name}</div>
                                                                                <div
                                                                                    className={classNames(selected ? 'font-medium' : 'font-normal', 'antialiased')}>{person.username}</div>
                                                                            </div>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'text-white' : 'text-susty',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                                                                            <CheckIcon className="h-5 w-5"
                                                                                       aria-hidden="true"/>
                                                                        </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            </div>
                                                            <hr/>
                                                        </div>

                                                    ))

                                                    }
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default Categorybrandcondition;
