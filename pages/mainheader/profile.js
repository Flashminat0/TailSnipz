import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
      <>
        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-400 focus:ring-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
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
                      className={
                        "bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                      }
                    >
                      English
                    </button>
                  </Menu.Item>
                </div>
                <div className="">
                  <Menu.Item>
                    <button
                      className={
                        "bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                      }
                    >
                      Duplicate
                    </button>
                  </Menu.Item>
                </div>
                <div className="">
                  <Menu.Item>
                    <button
                      className={
                        "bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                      }
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
  );
}
