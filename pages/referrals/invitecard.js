import React, {useState} from 'react'
import Link from 'next/link';

const inviteCard = () => {

    const [price, setPrice] = useState("15.00");
    const [referralLink, setReferralLink] = useState("https://www.vinted.com/invite/susty94");
    const [copyLink, setCopyLink] = useState("")
    const [myreferrals, setMyreferrals] = useState([])


  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <>
            <div className='w-96 bg-gray-50 p-6'>
                <h1 className='font-bold justify-items-center'>Invite friends and earn up to ${price} </h1>

                <p className='pt-8'>
                    Get $5.00 when a friend lists their first 3 items and $10.00 when they sell.
                </p>

                <div className='pt-6'>
                    <input 
                        defaultValue={referralLink}
                        className='border-null w-full font-bold'
                    />
                </div>
                
                <div className='justify-items-center py-10 '>
                    <button 
                        onClick={() => setCopyLink(referralLink)}
                        className='w-full h-10 border text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50'>
                        Copy invite link
                    </button>
                </div>
                

                <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}>
                    <Link href= '/referrals/yourreferrals' >
                        <li className="group grid grid-cols-12">
                            <div className='col-span-11 flex'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className='pl-3'>
                                    <p className={"font-thin "}>Your referrals</p>
                                </div>
                            </div>
                            
                            <div className='col-span-1 justify-items-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                           
                        </li>
                    </Link>
                </div>
            </div>
       </>
    </div>
  )
}

export default inviteCard