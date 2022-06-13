import React, {useState} from 'react';
import {motion} from "framer-motion";
import {
    CheckCircleIcon,
    ClockIcon,
    LocationMarkerIcon,
    PencilIcon,
    RssIcon
} from "@heroicons/react/outline";
import {Tab} from '@headlessui/react'
import Link from "next/link";
import ProfileCloset from "./ProfileCloset";
import ProfileReviews from "./ProfileReviews";

const tabsStaticData = {
    Closet: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Reviews: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
    ]
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProfileBio = () => {
    const [tabs, setTabs] = useState(tabsStaticData);

    return (
        <>
            <div className={"hidden md:block"}>
                <div className={"grid grid-cols-10 lg:grid-cols-11 gap-1 lg:gap-5 my-5 items-center"}>
                    <div className={"col-span-3 lg:col-span-2"}>
                        <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} alt={"profile image"}
                             width={"196rem"}
                             height={"196rem"} className={"rounded-full mx-3"}/>
                    </div>
                    <div className={"col-span-7 lg:col-span-9"}>
                        <div className={"grid grid-rows-2 lg:flex lg:justify-between items-center pb-5"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"text-2xl font-medium"}>susty94</div>
                                <div className={"text-sm text-gray-500"}>No reviews yet</div>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className={`inline-flex items-center px-4 py-1.5 mr-16 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                    <PencilIcon className={`h-5 w-5 mr-2`}/>
                                    Edit profile
                                </motion.button>
                            </div>
                        </div>
                        <div className={"text-gray-500 text-xs grid grid-cols-6 lg:grid-cols-7 gap-3"}>
                            <div className={"col-span-3 lg:col-span-2"}>
                                <div className={"my-3"}>About:</div>
                                <div className={"flex flex-col gap-1"}>
                                    <div className={"flex flex-row gap-1"}>
                                        <LocationMarkerIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>NEW YORK, NY, United States</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <ClockIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}>Last seen 1 hour ago</div>
                                    </div>
                                    <div className={"flex flex-row gap-1"}>
                                        <RssIcon className={"w-5 h-5"}/>
                                        <div className={"text-sm"}><Link href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                                            href={"#"}><a
                                            className={"text-susty hover:underline"}>{0}</a></Link> following
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-3 lg:col-span-5"}>
                                <div className={"my-3"}>Verified info:</div>
                                <div className={"flex flex-row gap-1"}>
                                    <CheckCircleIcon className={"w-5 h-5"}/>
                                    <div className={"text-sm"}>Email</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-full px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 max-w-[12rem] bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({selected}) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white border-b border-susty'
                                                : 'text-gray-400 hover:bg-gray-50'
                                        )
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileCloset/>
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews/>
                                </ul>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <div className={"block md:hidden divide-y-2 divide-gray-200"}>
                <div className="max-w-full px-0 py-4">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 max-w-full bg-white p-1">
                            {Object.keys(tabs).map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({selected}) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5 text-gray-900',
                                            'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white border-b border-susty'
                                                : 'text-gray-400 hover:bg-gray-50'
                                        )
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <div className={"flex flex-row gap-3 items-center py-2 my-2"}>
                                        <div className={"flex flex-row gap-3 items-center"}>
                                            <img src={'https://www.vinted.com/assets/no-photo/user-empty-state.svg'} alt={"profile image"}
                                                 width={"50"}
                                                 height={"50"} className={"rounded-full items-center"}/>
                                            <div className={"flex flex-col gap-1 font-medium pr-5"}>
                                                <div className={"text-2xl font-medium"}>susty94</div>
                                                <div className={"text-gray-500"}>No reviews yet</div>
                                            </div>
                                        </div>
                                        <div className={"col-span-1 ml-auto"}>
                                            <div>
                                                <motion.button
                                                    whileHover={{scale: 1.02}}
                                                    whileTap={{scale: 0.98}}
                                                    className={`inline-flex items-center px-4 py-1.5 mr-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50`}>
                                                    <PencilIcon className={`h-5 w-5 mr-2`}/>
                                                    Edit profile
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col gap-0.5 text-gray-500 py-4"}>
                                        <div className={"flex flex-row gap-1"}>
                                            <CheckCircleIcon className={"w-5 h-5"}/>
                                            <div className={"text-sm"}>Email</div>
                                        </div>
                                        <div className={"flex flex-row gap-1"}>
                                            <LocationMarkerIcon className={"w-5 h-5"}/>
                                            <div className={"text-sm"}>NEW YORK, NY, United States</div>
                                        </div>
                                        <div className={"flex flex-row gap-1"}>
                                            <RssIcon className={"w-5 h-5"}/>
                                            <div className={"text-sm"}><Link href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> followers, <Link
                                                href={"#"}><a className={"text-susty hover:underline"}>{0}</a></Link> following
                                            </div>
                                        </div>
                                    </div>
                                    <ProfileCloset/>
                                </ul>
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                <ul>
                                    <ProfileReviews/>
                                </ul>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    );
};

export default ProfileBio;