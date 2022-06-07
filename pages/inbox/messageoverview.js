import React, {useState} from 'react';
import {ArrowRightIcon, CameraIcon, EyeIcon, InformationCircleIcon, LocationMarkerIcon} from "@heroicons/react/outline";

const receiverMessageStaticData = [{
    id: 1,
    username: "John Smith",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "profile picture",
    chat: "susty94, your free bump is about to expire. Use it! Pick an item you want to sell quick, bump it and sell it up to 5 times faster. Are you ready to upload your first item on Susty? To make selling even easier than it is already, we’re giving you 1 free bump, which you can activate within the next 7 days. A bump can make your item more visible to potential buyers. A bumped item appears high up in the newsfeed and catalog search results once a day, for 3 days in a row. Team Susty",
    country: "New Zealand",
    active: "4 months",
    updatedAt: "6 minutes"
}];

const senderMessageStaticData = [{id: 1, chat: "Hi, I will Check them."}];

const Messageoverview = () => {
    const [receiverMessage, setReceiverMessage] = useState(receiverMessageStaticData);
    const [senderMessage, setSenderMessage] = useState(senderMessageStaticData);
    const [msgInput, setMsgInput] = useState('');

    return (
        <div className={"w-screen grid place-content-center font-susty"}>
            <>
                <div className={"bg-white max-h-[60vh] px-2 sm:px-6 lg:px-16 shadow-sm"}>
                    <div className={"flex flex-col"}>
                        {receiverMessage.map((receive) => (
                            <div key={receive.id} className={"flex flex-col gap-1"}>
                                <div
                                    className={"grid grid-cols-4 lg:grid-cols-6 items-center border-b-2 border-gray-100 py-5 px-3 mb-8 shadow-sm"}>
                                    <div
                                        className={"col-start-2 col-end-4 lg:col-start-4 lg:col-end-5 mx-auto lg:mx-0 text-susty text-base"}>
                                        {receive.username}
                                    </div>
                                    <InformationCircleIcon className={"col-start-4 lg:col-start-6 ml-auto w-5 h5"}/>
                                </div>
                                <div className={"grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-10 gap-1 px-2 sm:px-5"}>
                                    <div className={"col-start-1 col-end-2 sm:col-end-3 lg:col-end-2 sm:ml-auto sm:mr-4"}>
                                        <img className={"inline-block h-12 w-12 rounded-full"}
                                             src={receive.imageUrl}
                                             alt={receive.alt}/>
                                    </div>
                                    <div className={"col-start-2 sm:col-start-3 col-end-12 lg:col-start-2 lg:col-end-7"}>
                                        <div className={"p-4 rounded-lg shadow-sm border border-gray-100"}>
                                            <div className={"flex flex-col gap-2"}>
                                                <div className={"font-semibold"}>Hi! I'm {receive.username}</div>
                                                <div className={"text-sm leading-relaxed"}>
                                                    {receive.chat}
                                                </div>
                                                <div
                                                    className={"flex flex-row gap-3 items-center text-gray-500 text-xs mt-4"}>
                                                    <LocationMarkerIcon className={"w-4 h-4"}/>
                                                    <span>{receive.country}</span>
                                                </div>
                                                <div
                                                    className={"flex flex-row gap-3 items-center text-xs text-gray-500"}>
                                                    <EyeIcon className={"w-4 h-4"}/>
                                                    <span>Last seen {receive.active} ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={"inline-flex place-content-center pt-5 pb-3 text-gray-400 text-xs font-medium"}>in {receive.updatedAt}
                                </div>
                            </div>
                        ))}
                        {senderMessage.map((send) => (
                            <div key={send.id}
                                className={"bg-gray-100 px-5 py-3 text-sm rounded-lg shadow-sm ml-auto mr-4 leading-relaxed"}>{send.chat}</div>
                        ))}
                        <div
                            className={"inline-flex place-content-center mt-5 mb-3 text-sm text-susty font-medium"}>Translate
                            this conversation
                        </div>
                        <div
                            className={"grid grid-cols-5 sm:grid-cols-12 lg:grid-cols-10 gap-2 px-2 sm:px-5 items-center border border-t-4 border-gray-100 relative"}>
                            <CameraIcon
                                className={"col-start-1 col-end-2 lg:col-start-1 lg:col-end-2 relative w-12 h-8 m-1 sm:m-4 text-gray-400"}/>
                            <input
                                onChange={(e) => {
                                    setMsgInput(e.target.value);
                                }}
                                className={"col-start-2 sm:col-start-3 col-end-13 lg:col-start-2 lg:col-end-11 px-5 py-3 my-5 text-sm bg-gray-100 rounded-lg focus:outline-none"}
                                placeholder={"Write a message here"}/>
                            <ArrowRightIcon
                                className={`col-start-6 sm:col-start-12 lg:col-start-10 w-5 h-5 font-semibold absolute ${msgInput.length > 0 ? 'text-susty' : 'text-gray-300'}`}/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Messageoverview;