import React from 'react'

const index = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
        <div className={"w-full bg-gray-50"}>
            <div className='p-3'>
                <p>Privacy settings</p>
            </div>
            <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}
                    onClick = {() => setEnableDownloadData(true)}
            >
                <li className="group flex justify-between">
                    <div>
                        <p className={"font-semibold"}>Safety on Vinted during COVID-19</p>
                    </div>
                    <div className='pl-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    
                </li>
            </div>
            <hr className={`my-1`}/>

            <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}
                    onClick = {() => setEnableDownloadData(true)}
            >
                <li className="group flex justify-between">
                    <div>
                        <p className={"font-semibold"}>Your affected orders during COVID-19</p>
                    </div>
                    <div className='pl-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    
                </li>
            </div>
            <hr className={`my-1`}/>

        </div>
    </div>
  )
}

export default index