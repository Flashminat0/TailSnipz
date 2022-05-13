import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'


export default function Example() {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
    <>
      <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-white text-md font-medium text-gray-700">
            EN
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-susty text-gray-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <Menu.Item>
                  <button
                    className={"bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"}
                  >
                    English
                  </button>
              </Menu.Item>
            </div>
            <div className="">
            <Menu.Item>
                  <button
                    className={"bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"}
                  >
                    Duplicate
                  </button>
              </Menu.Item>
            </div>
            <div className="">
            <Menu.Item>
                  <button
                    className={"bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"}
                  >
                    Duplicate
                  </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>
    </div>
  )
}




