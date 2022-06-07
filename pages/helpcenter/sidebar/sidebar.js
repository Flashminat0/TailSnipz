import {Disclosure} from '@headlessui/react'
import React from 'react'

// const sidebarItems = [
//     "Home", 
//     "COVID-19",
//     "Selling",
//     "Buying",
//     "Shipping",
//     "Payment & Payouts",
//     "Safety & Reporting",
//     "My account & Settings",
//     "Community",
//     "Not Logged in"
// ]


const sidebarItems = [
    "Home",
    "COVID-19",
    "Selling",
    "Buying",
    "Shipping",
    "Payment & Payouts",
    "Safety & Reporting",
    "My account & Settings",
    "Community",
    "Not Logged in"
]

const sidebar = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <>
        <div className='bg-slate-100 p-2'>

            <ul>
            {/* {
                sidebarItems.map((item, index) => {
                    return (
                        <li key={index}
                            className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'
                        >{item}</li>
                    )
                    
                })
            } */}
                <li className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'>
                    Home
                </li>
                <li className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'>
                    COVID-19
                </li>

                <li>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                <div className=''>
                                    <div>
                                        <p >Selling</p>
                                        {/* <p className={"font-semibold"}>Selling</p> */}
                                    </div>
                                </div>
                                
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-4 text-sm">
                                <div>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Selling process</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Listing an item</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Selling faster</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Shipping</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Getting paid</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Feedback & Communication</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Returns & Cancellations</p>
                                    <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">My items</p>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p >Buying</p>
                                        </div>
                                    </div>
                                    
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Buying process</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Finding an item</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Before you buy</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Making a payment</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Shipping and Delivery</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Feedback & Communication</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Refunds & cancellation</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p >Shipping</p>
                                        </div>
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">I'm a Seller</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">I'm a buyer</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p>Payment & Payouts</p>
                                        </div>
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Payment methods</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Vinted Wallet</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Payouts</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p >Safety & Reporting</p>
                                        </div>
                                    </div>
                                    
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Buyer protection</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Seller protection</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Personal safety & security</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Private data usage & protection</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Identity verifications</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Catalog rules</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Community and forum rules</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p >My account & Settings</p>
                                        </div>
                                    </div>
                                    
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">New Vinted</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">My closet settings</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Profile details</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Shipping & Payment settings</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Vinted Wallet</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Personalization</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Referrals</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Notifications & emails</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full text-left text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out">
                                    <div className=''>
                                        <div>
                                            <p>Community</p>
                                        </div>
                                    </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 text-sm">
                                    <div>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Forum</p>
                                        <p className="text-left text-gray-500 p-2 hover:bg-slate-200 cursor-pointer transition ease-in-out">Members</p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

                <li className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'>
                Not Logged in
                </li>
            </ul>
        </div>
        </>
    </div>
  )
}

export default sidebar