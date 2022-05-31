import React, {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import SearchBar from './searchbar'
import {
    HiChartBar,
    HiCursorClick,
    HiDocumentReport,
    HiMenu,
    HiRefresh,
    HiShieldCheck,
    HiViewGrid,
    HiX,
} from 'react-icons/hi'
import LoginSignupButton from '../buttons/loginsignupbutton'


const searchBarOptions = [
    {id: 1, name: 'Catalog  '},
    {id: 2, name: 'Members'},
    {id: 3, name: 'Forum'},
    {id: 4, name: 'Help Center'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const solutions = [
    {
        name: 'Analytics',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '#',
        // icon: HiChartBar,
    },
    {
        name: 'Engagement',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '#',
        // icon: HiCursorClick,
    },
    {
        name: 'Security',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        // icon: HiShieldCheck,
    },
    {
        name: 'Integrations',
        description:
            "Connect with third-party tools that you're already using.",
        href: '#',
        // icon: HiViewGrid,
    },
    {
        name: 'Automations',
        description:
            'Build strategic funnels that will drive your customers to convert',
        href: '#',
        // icon: HiRefresh,

    },
    {
        name: 'Reports',
        description:
            'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        // icon: HiDocumentReport,
    },
]
const resources = [
    {
        name: 'Help Center',
        description:
            'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    {
        name: 'Guides',
        description:
            'Learn how to maximize our platform to get the most out of it.',
        href: '#',
    },
    {
        name: 'Events',
        description:
            'See what meet-ups and other events we might be planning near you.',
        href: '#',
    },
    {
        name: 'Security',
        description: 'Understand how we take your privacy seriously.',
        href: '#',
    },
]



const Desktopview = () => {

    const router = useRouter()

    const [selectedSearchBarOption, setSelectedSearchBarOption] = useState(
        searchBarOptions[0]
    )

  return (
    <div >
        {/* hi
        <div className={'hidden md:block'}>
            <SearchBar
                selectedSearchBarOption={selectedSearchBarOption}
                setSelectedSearchBarOption={setSelectedSearchBarOption}
                searchBarOptions={searchBarOptions}
            />
        </div> */}


        <Popover className="relative ">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start ">
                <div className="flex justify-start">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://firebasestorage.googleapis.com/v0/b/susty-next.appspot.com/o/Susty.png?alt=media&token=08d4c7c6-fcda-4381-bbe6-4ea5c9eb5b85"
                            alt=""
                        />
                    </a>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

                <div className={'hidden md:block w-full'}>
                    <SearchBar
                        selectedSearchBarOption={selectedSearchBarOption}
                        setSelectedSearchBarOption={setSelectedSearchBarOption}
                        searchBarOptions={searchBarOptions}
                    />
                </div>

                <div className="hidden md:flex items-center justify-end md:flex-1 gap-3">
                    <LoginSignupButton />
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
                <div className='mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#9e9e9e' strokeWidth="0.5">
                        <path d="M12.75 14.506h-1.5v-1.139c0-1.077.598-2.064 1.522-2.514a1.78 1.78 0 0 0 .927-2.068 1.741 1.741 0 0 0-1.218-1.218 1.766 1.766 0 0 0-1.559.305 1.75 1.75 0 0 0-.685 1.395h-1.5c0-1.017.46-1.958 1.266-2.58a3.285 3.285 0 0 1 2.853-.574 3.244 3.244 0 0 1 2.297 2.297c.398 1.542-.31 3.1-1.723 3.79-.413.202-.68.66-.68 1.167v1.139zM12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.524 0-10-4.477-10-10C2 6.479 6.476 2 12 2zm0 1.5c-4.687 0-8.5 3.814-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.686 0 8.499-3.813 8.499-8.5 0-4.686-3.813-8.5-8.5-8.5H12zm-1.003 13.507c0-.5526.448-1.0005 1.0005-1.0005.5526 0 1.0005.448 1.0005 1.0005 0 .5523-.4477 1-1 1s-1-.4477-1-1h-.001z"></path>
                    </svg>
                </div>
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
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                            <div className="mt-6">
                                <nav className="grid grid-cols-1 gap-7">
                                    {solutions.map((solution) => (
                                        <a
                                            key={solution.name}
                                            href={solution.href}
                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                        >
                                            {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                <solution.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div> */}
                                            <div className="ml-4 text-base font-medium text-gray-900">
                                                {solution.name}
                                            </div>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5">
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Enterprise
                                </a>
                                {resources.map((resource) => (
                                    <a
                                        key={resource.name}
                                        href={resource.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {resource.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>

    </div>
  )
}

export default Desktopview