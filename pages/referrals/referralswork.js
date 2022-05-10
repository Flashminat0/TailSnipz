import React from 'react';
import Link from "next/link";

const img1 = 'https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_share.png';
const img2 = 'https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_friends.png';
const img3 = 'https://5a2583d7dd16c25cb2e8-358d15e499fca729302e63598be13736.ssl.cf3.rackcdn.com/referrals/referrals_voucher.png';

const Referralswork = () => {
    return (
        <div className={"h-screen w-screen grid place-content-center font-susty"}>
            <>
                <div className={"hidden md:block"}>
                    <div className={"grid grid-rows-6 gap-1 px-10"}>
                        <div className={"row-span-1 text-3xl"}>How referrals work</div>
                        <div className={"row-span-4 grid grid-cols-3 gap-8"}>
                            <div className={"col-span-1 col-start-1 my-5"}>
                                <img src={img1} alt={""} className={"object-cover box-content"} width={"300"}
                                     height={"300"}/>
                                <div className={"text-2xl font-medium my-2"}>Share your link</div>
                                <div className={"text-gray-500 font-medium"}>Invite people to join Vinted by sharing your link with them.</div>
                            </div>
                            <div className={"col-span-1 col-start-2 my-5"}>
                                <img src={img2} alt={""} className={"object-cover box-content"} width={"300"}
                                     height={"300"}/>
                                <div className={"text-2xl font-medium my-2"}>Tell your friends to list</div>
                                <div className={"text-gray-500 font-medium"}>When they list 3 items within 7 days of joining, you’ll get a $5 voucher. You’ll get an extra $10 voucher if they complete a sale within 30 days.</div>
                            </div>
                            <div className={"col-span-1 col-start-3  my-5"}>
                                <img src={img3} alt={""} className={"object-cover box-content"} width={"300"}
                                     height={"300"}/>
                                <div className={"text-2xl font-medium my-2"}>Spend your voucher</div>
                                <div className={"text-gray-500 font-medium"}>Buy an item that costs $15 or more (not including shipping), and your voucher will be automatically deducted from the item price.</div>
                            </div>
                        </div>
                        <div className={"row-span-1 text-xs text-gray-500"}>
                            This offer is subject to <Link href={"/"}><a className={"text-susty hover:underline"}>terms &
                            conditions.</a></Link> The people you refer need to consent to receiving your
                            referral invite. To receive your voucher, your friend must list 3 items within 7 days. If your
                            friend sells an item within 30 days, you’ll receive an additional voucher. To learn more,
                            <Link href={"/"}>
                                <a className={"text-susty hover:underline"}> visit the FAQ.</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"block md:hidden"}>

                </div>
            </>
        </div>
    );
};

export default Referralswork;