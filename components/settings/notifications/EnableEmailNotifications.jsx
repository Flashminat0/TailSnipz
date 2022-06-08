import {Switch} from '@headlessui/react'
import React, {useState} from 'react'

const EnableEmailNotifications = () => {

    const [enabled, setEnabled] = useState(false)

  return (
    <div className={""}>
        <>
            <div className={"w-full bg-gray-50"}>
                <div className={"grid grid-cols-5 gap-2 p-5"}>
                    <div className={"col-span-4"}>
                        <p className={"font-semibold"}>Enable email notifications</p>
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-susty' : 'bg-gray-300'}
                            relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-[1.855rem]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default EnableEmailNotifications