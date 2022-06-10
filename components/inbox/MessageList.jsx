import React, {useState} from 'react';
import {PlusIcon} from "@heroicons/react/solid";
import router from 'next/router'
import Link from 'next/link'

const messagesStaticData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "profile picture", name: "Susty", message: "Let's get started on vinted", createdAt: "1 week ago"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "profile picture", name: "John Smith", message: "Invite friends and get vouchers", createdAt: "1 week ago"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "profile picture",
        name: "David Rodenas",
        message: "A gift to help you sell faster",
        createdAt: "1 week ago"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "profile picture", name: "Steven Sim", message: "Your free bump will expire soon", createdAt: "1 day ago"
    },
];

const Messagelist = () => {
    const [messages, setMessages] = useState(messagesStaticData);

    return (
        <div className={""}>
            <>
                <div className={"w-full bg-white p-5 shadow-sm"}>
                    <div className="mt-4 px-1">
                        <Link href = '/inbox/new'>
                            <button
                                className={`inline-flex items-center px-4 py-1.5 border border-transparent shadow-sm text-xs font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty`}
                                >
                                <PlusIcon className="w-5 h-5 mr-2 items-center"/>
                                New Message
                            </button>
                        </Link>
                    </div>
                    <div className={"flex flex-col-reverse mt-10"}>
                        {messages.map((msg) => (
                            <div key={msg.id}
                                 className={"inline-flex border-b-2 border-gray-200 py-5 px-2 lg:px-4 hover:bg-red-50 cursor-pointer"}
                                 onClick = {async() => {
                                     await router.push({
                                         pathname: '/inbox/overview',
                                         query: {
                                            id: msg.id,
                                         },
                                     })
                                 }}
                                 >
                                <div className={"shrink-0"}><img
                                    className={" inline-block h-14 w-14 rounded-full"}
                                    src={msg.src} alt={msg.alt}/></div>
                                <div className={"pl-3 flex flex-col pr-2 w-full "}>
                                    <div className={"font-medium text-base capitalize"}>{msg.name}</div>
                                    <div className={"text-sm text-gray-500"}>{msg.message}</div>
                                </div>
                                <div className = ' w-full'>
                                    <div className={"float-right md:text-sm text-xs font-normal text-gray-500 "}>{msg.createdAt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    );
};

export default Messagelist;