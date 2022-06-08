import React, {Fragment, useState} from 'react'
import {Menu, Popover, Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import SearchBar from './SearchBar'
import {HiMenu, HiX,} from 'react-icons/hi'
import LoginSignupButton from '../buttons/loginsignupbutton'
import { ChevronDownIcon } from '@heroicons/react/outline'


const searchBarStaticOptions = [
    {id: 1, name: 'Catalog  '},
    {id: 2, name: 'Members'},
    {id: 3, name: 'Forum'},
    {id: 4, name: 'Help Center'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const guestMobileArrayStaticData = [
    {
        id: 1,
        name: "Men",
        icon: "",
        path: "#"
    },
    {
        id: 2,
        name: "Women",
        icon: "",
        path: "#"
    },
    {
        id: 3,
        name: "Kids",
        icon: "",
        path: "#"
    },
    {
        id: 4,
        name: "Home",
        icon: "",
        path: "#"
    },
    {
        id: 5,
        name: "Entertainment",
        icon: "",
        path: "#"
    },
]

const catalogMobileArrayStaticData = [
    {
        id: 1,
        name: "About",
        path: "#",
    },
    {
        id: 2,
        name: "Members",
        path: "#",
    },
    {
        id: 3,
        name: "Forum",
        path: "#",
    },
    {
        id: 4,
        name: "Help center",
        path: "#",
    },
    {
        id: 5,
        name: "FAQs",
        path: "#",
    },
]

const userDropdown = [
    {id:'86a66b51-14df-4947-9580-2f6f44e70e07', name: "Account", path : '#' },
    {id:'03380728-d104-473b-bb9c-b7671185d114', name: "Profile", path : '#' },
    {id:'d0960412-44f7-4120-8851-b605328b2738', name: "Settings", path : '#' },
    {id:'6417e8c7-b9b8-46de-a25a-829700003b79', name: "Personalization", path : '#' },
    {id:'3236825c-ac12-4656-b099-4a395adb2eb0', name: "Wallet", path : '#' },
    {id:'bbced0e1-2e6b-4525-99e9-6b2006ad0c42', name: "Donations", path : '#' },
    {id:'8c69d15d-3669-4ec8-a5c5-308f16cbb3aa', name: "Log out", path : '#' },
]

const languageDropdown = [
    {short: "EN", long: "English, US(English)"},
    {short: "US", long: "Español, US(Spanish)"}
]

const DesktopView = () => {
    const [searchBarOptions, setSearchBarOptions] = useState(searchBarStaticOptions);
    const [guestMobileArray, setGuestMobileArray] = useState(guestMobileArrayStaticData);
    const [catalogMobileArray, setCatalogMobileArray] = useState(catalogMobileArrayStaticData);
    const [selectedLanguage, setSelectedLanguage] = useState("EN")

    const router = useRouter()

    // const [loggedIn, setLoggedIn] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)

    const [selectedSearchBarOption, setSelectedSearchBarOption] = useState(
        searchBarOptions[0]
    )

    return (
        <>
            <Popover className="relative ">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Susty.png?alt=media&token=08d4c7c6-fcda-4381-bbe6-4ea5c9eb5b85"
                                alt="Image"
                            />
                        </a>
                    </div>

                    {/* <div className="-mr-2 -my-2 md:hidden ">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div> */}

                    <div className={'hidden md:block w-full'}>
                        <SearchBar
                            selectedSearchBarOption={selectedSearchBarOption}
                            setSelectedSearchBarOption={setSelectedSearchBarOption}
                            searchBarOptions={searchBarOptions}
                        />
                    </div>
                    <div className='inline-flex gap-2'>

                        {
                            loggedIn && (
                                <>
                                    <div className='md:-ml-4 lg:-ml-4'>
                                        <svg viewBox="0 0 24 24" width="24" height="24" aria-label="Messages" fill='#9e9e9e'
                                             strokeWidth="0.5">
                                            <path
                                                d="M3.5 18.5V6.54l8.54 6.4 8.45-6.34v11.9H3.5zm15.95-13l-7.41 5.56L4.62 5.5h14.83zM20.5 4H3.5C2.67 4 2 4.67 2 5.5v13c0 .83.67 1.5 1.5 1.5h17c.82 0 1.5-.67 1.5-1.5v-13c0-.83-.68-1.5-1.5-1.5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 24 24" width="24" height="24" aria-label="Notifications"
                                             fill='#9e9e9e' strokeWidth="0.5">
                                            <path
                                                d="M4.5 17.5c0-2.08 1.71-3.18 1.77-3.21l.73-.44V9a5.5 5.5 0 0 1 11 0v4l.01.84.7.44a4.01 4.01 0 0 1 1.79 3.22h-16zm8 3a2.5 2.5 0 0 1-2.29-1.5h4.58a2.5 2.5 0 0 1-2.29 1.5zm7-7.5V9a7 7 0 1 0-14 0v4S3 14.5 3 17.5c0 .83.67 1.5 1.5 1.5h4.14a4 4 0 0 0 7.72 0h4.14c.83 0 1.5-.67 1.5-1.5 0-3-2.5-4.5-2.5-4.5z"></path>
                                        </svg>
                                    </div>
                                    <div className='md:mr-2 lg:mr-2 -mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#9e9e9e'
                                             strokeWidth="0.5">
                                            <path
                                                d="M16.66 3C13.98 3 12 5.24 12 5.24S10.02 3 7.34 3a5.1 5.1 0 0 0-2.85.9c-3.65 2.42-3.1 7.53.43 10.93A105.1 105.1 0 0 0 12 21s3.8-2.99 7.09-6.17c3.51-3.4 4.08-8.51.42-10.93a5.1 5.1 0 0 0-2.85-.9m0 1.5c.7 0 1.35.21 2.02.66a3.9 3.9 0 0 1 1.8 2.98c.17 1.87-.74 3.97-2.44 5.61A100.22 100.22 0 0 1 12 19.07a100.22 100.22 0 0 1-6.04-5.32c-1.7-1.64-2.61-3.74-2.44-5.6a3.9 3.9 0 0 1 1.8-3 3.6 3.6 0 0 1 2.02-.65c1.95 0 3.53 1.72 3.54 1.73l1.11 1.25 1.13-1.24c.02-.02 1.59-1.74 3.54-1.74"></path>
                                        </svg>
                                    </div>


                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center -my-1 pl-2 md:pl-0 md:mr-8 md:pr-2 w-full rounded-md ring-0 text-sm font-medium text-gray-700">
                                                <img alt='User' className='rounded-full' height="30" width="30" src='data:image/png;base64,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' />
                                                <ChevronDownIcon className=" ml-0 h-8 w-3" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-visible z-50">
                                            <div className="py-1">

                                            {
                                                userDropdown.map((item, idx) => {
                                                    return (
                                                        <Menu.Item key={item.id}>
                                                            {({ active }) => (
                                                                <a
                                                                href={item.path}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    )
                                                })
                                            }

                                            </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </>
                            )
                        }

                        <Menu as="div" className="md:hidden relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex justify-center -my-1 pl-2 md:pl-0 md:mr-8 md:pr-2 w-full rounded-md ring-0 text-sm font-medium text-gray-700">
                                    <div>{selectedLanguage}</div>
                                    <ChevronDownIcon className=" ml-0 h-5 w-3" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-visible z-50">
                                <div className="py-1">

                                {
                                    languageDropdown.map((item, idx) => {
                                        return (
                                            <Menu.Item key={item.id}>
                                                {({ active }) => (
                                                    <a
                                                    onClick={() => setSelectedLanguage(item.short)}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                    >
                                                        {item.long}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        )
                                    })
                                }

                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                                <span className="sr-only">Open menu</span>
                                <HiMenu className="h-6 w-6" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 gap-3">
                        <LoginSignupButton loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                        <button
                            onClick={async () => {
                                await router.push('/items/add')
                            }}
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-susty hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Sell&nbsp;now
                        </button>
                    </div>

                    <div className='hidden md:block mx-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill='#9e9e9e' strokeWidth="0.5">
                            <path
                                d="M12.75 14.506h-1.5v-1.139c0-1.077.598-2.064 1.522-2.514a1.78 1.78 0 0 0 .927-2.068 1.741 1.741 0 0 0-1.218-1.218 1.766 1.766 0 0 0-1.559.305 1.75 1.75 0 0 0-.685 1.395h-1.5c0-1.017.46-1.958 1.266-2.58a3.285 3.285 0 0 1 2.853-.574 3.244 3.244 0 0 1 2.297 2.297c.398 1.542-.31 3.1-1.723 3.79-.413.202-.68.66-.68 1.167v1.139zM12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.524 0-10-4.477-10-10C2 6.479 6.476 2 12 2zm0 1.5c-4.687 0-8.5 3.814-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.686 0 8.499-3.813 8.499-8.5 0-4.686-3.813-8.5-8.5-8.5H12zm-1.003 13.507c0-.5526.448-1.0005 1.0005-1.0005.5526 0 1.0005.448 1.0005 1.0005 0 .5523-.4477 1-1 1s-1-.4477-1-1h-.001z"></path>
                        </svg>
                    </div>


                    <Menu as="div" className="hidden md:block relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center -my-1 pl-2 md:pl-0 md:mr-0 md:pr-0 w-full rounded-md ring-0 text-sm font-medium text-gray-700">
                                <div>{selectedLanguage}</div>
                                <ChevronDownIcon className=" ml-0 h-5 w-3" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-visible z-50">
                            <div className="py-1">

                            {
                                languageDropdown.map((item, idx) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            {({ active }) => (
                                                <a
                                                onClick={() => setSelectedLanguage(item.short)}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                >
                                                    {item.long}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    )
                                })
                            }

                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>
                <div className={'md:hidden block '}>
                    <SearchBar
                        selectedSearchBarOption={selectedSearchBarOption}
                        setSelectedSearchBarOption={setSelectedSearchBarOption}
                        searchBarOptions={searchBarOptions}
                    />
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                    >
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-end">
                                    {/* <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div> */}
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400">
                                        <span className="sr-only">
                                            Close menu
                                            
                                        </span>
                                            <HiX
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>

                                <button
                                    onClick={async () => {
                                        await router.push('/items/add')
                                    }}
                                    type="button"
                                    className="w-full items-center px-3 py-3 my-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-susty hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Sell&nbsp;now
                                </button>
                                <LoginSignupButton/>

                                <div className="mt-6">
                                    <p className='text-slate-400 mb-4'>Categories</p>
                                    <nav className="grid grid-cols-1 ">

                                        {guestMobileArray.map((item) => (
                                            <div key={item.id}>
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="-m-3 p-3 items-center rounded-lg"
                                                >

                                                    <div className="ml-4 text-base font-medium text-gray-900 ">
                                                        {item.name}
                                                    </div>
                                                </a>
                                                <hr className='-my-1 '/>
                                            </div>
                                        ))}

                                    </nav>
                                </div>

                                <div className="mt-6">
                                    <p className='text-slate-400 mb-4'>Catalog</p>
                                    <nav className="grid grid-cols-1">
                                        {catalogMobileArray.map((item) => (
                                            <div key={item.id}>
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="-m-3 p-3  items-center rounded-lg "
                                                >
                                                    {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                    <solution.icon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </div> */}
                                                    <div className="ml-4 text-base font-medium text-gray-900 ">
                                                        {item.name}
                                                    </div>
                                                </a>
                                                <hr className='-my-1 '/>
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                            </div>

                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}

export default DesktopView