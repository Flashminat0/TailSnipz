import React from 'react'

const Feedback = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>

        <div className='w-96'>
            <div className={"w-full bg-gray-50 p-5 hover:bg-gray-100 transition ease-in-out delay-50 cursor-pointer"}
                onClick = {() => setEnableDownloadData(true)}
            >
                <li className="group flex justify-between">
                    <div>
                        <p className={"font-semibold"}>Send your feedback</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#7d7d7d" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Feedback