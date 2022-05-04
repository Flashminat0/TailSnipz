import React from 'react'

const downloadaccountdata = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <>
            <div className='w-80 bg-gray-50 p-6'>
                <h1 className='font-bold justify-items-center'>Download account data</h1>

                <p className='pt-8'>
                    Your account data includes information that you’ve shared on your profile, your items, messages, and more.
                </p>
                <p className='pt-4'>
                    It can take up to a month to process your request. You’ll then receive a copy of your account data via email. The data will be in HTML files contained within a ZIP file.
                </p>
                <p className='pt-4'>
                    We’ll contact you at susty.co.nz@gmail.com to confirm your request.
                </p>

                <div className='justify-items-center pt-10'>
                    <button className='w-full h-10 border text-white bg-susty hover:bg-white hover:text-susty hover:border-susty focus:text-red-400 focus:border-susty focus:bg-red-50'>
                        Request data
                    </button>
                </div>
                
            </div>
        </>
    </div>
  )
}

export default downloadaccountdata