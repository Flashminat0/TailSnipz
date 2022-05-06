import React from 'react'

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
            {
                sidebarItems.map((item, index) => {
                    return (
                        <li key={index}
                            className= 'text-gray-500 p-4 hover:bg-slate-200 cursor-pointer transition ease-in-out'
                        >{item}</li>
                    )
                    
                })
            }
            </ul>
        </div>
        </>
    </div>
  )
}

export default sidebar