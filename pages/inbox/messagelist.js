import React from 'react';
import {PlusIcon} from "@heroicons/react/solid";

const messages = [
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "", name: "Susty", message: "Let's get started on vinted", createdAt: "1 week ago"
    },
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "", name: "John Smith", message: "Invite friends and get vouchers", createdAt: "1 week ago"
    },
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "", name: "David Rodenas", message: "A gift to help you sell faster", createdAt: "1 week ago"
    },
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "", name: "Steven Sim", message: "Your free bump will expire soon", createdAt: "1 day ago"
    },
];

const Messagelist = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"w-full bg-white p-5 shadow-sm"}>
                    <div className="mt-4 px-1">
                        <button
                            className={`inline-flex items-center px-4 py-1.5 border border-transparent shadow-sm text-base font-medium rounded-md text-susty bg-red-100 hover:bg-susty hover:text-white hover:border-susty`}>
                            <PlusIcon className="w-5 h-5 mr-2 items-center"/>
                            New Message
                        </button>
                    </div>
                    <div className={"flex flex-col-reverse mt-10"}>
                        {messages.map((msg) => (
                            <div className={"grid grid-cols-12 border-b-2 border-gray-200 py-5 px-2 lg:px-4 hover:bg-red-50"}>
                                <div className={"col-span-2 lg:col-span-1"}><img className={"inline-block h-14 w-14 rounded-full"}
                                                                   src={msg.src} alt={msg.alt}/></div>
                                <div className={"col-span-7 lg:col-span-10 flex flex-col pr-2"}>
                                    <div className={"font-medium text-lg capitalize"}>{msg.name}</div>
                                    <div className={"text-gray-500"}>{msg.message}</div>
                                </div>
                                <div className={"col-span-3 lg:col-span-1"}>{msg.createdAt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </div>
    );
};

export default Messagelist;