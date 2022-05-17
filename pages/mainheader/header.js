import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  return (
    <div className={""}>
      <>
        <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16 ml-32 mr-32 border-8">

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center mr-8">
                <Image src="/Susty.png" width={85} height={44} />
              </div>
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 bg-gray-50 focus:border-indigo-500 block w-full pl-36 pr-40 ml-4  sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search for items"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-1 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                      <option>Catalog</option>
                      <option>Members</option>
                      <option>Forum</option>
                      <option>Help Center</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>


























{/** Notification */}
<Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full   px-4 py-2 bg-white text-sm font-medium text-gray-700   focus:ring-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer"
                fill="none "
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
            <Menu.Items className="origin-top absolute  mt-1 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <button
                    type="button"
                    className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                  >
                    <div className="grid  gap- flex items-left">
                      <div className="mb-2">
                        <img
                          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                          className="h-18 w-32 rounded-full"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className=" text-sm font-medium text-gray-700 bg-white">
                      <a href="#" className="block w-full px-1 py-2 ">
                        Clothes you don't wear = extra cash. Sell them today.
                        Upload now.
                      </a>
                      <a href="#" className="block w-full px-1 py-2 text-left">
                        16 hours ago
                      </a>
                    </div>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    type="button"
                    className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                  >
                    <div className="grid  gap- flex items-left">
                      <div className="mb-2">
                        <img
                          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                          className="h-18 w-32 rounded-full"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className=" text-sm font-medium text-gray-700 bg-white">
                      <a href="#" className="block w-full px-1 py-2 ">
                        Clothes you don't wear = extra cash. Sell them today.
                        Upload now.
                      </a>
                      <a href="#" className="block w-full px-1 py-2 text-left">
                        16 hours ago
                      </a>
                    </div>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    type="button"
                    className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
                  >
                    <div className="grid  gap- flex items-left">
                      <div className="mb-2">
                        <img
                          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                          className="h-18 w-32 rounded-full"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className=" text-sm font-medium text-gray-700 bg-white">
                      <a href="#" className="block w-full px-1 py-2 ">
                        Clothes you don't wear = extra cash. Sell them today.
                        Upload now.
                      </a>
                      <a href="#" className="block w-full px-1 py-2 text-left">
                        16 hours ago
                      </a>
                    </div>
                  </button>
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    <button
                      type="submit"
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      See All
                    </button>
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
{/**End Notification */}







































{/** Profile */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-1 py-1 bg-white text-sm font-medium text-gray-400 focus:ring-indigo-500">
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
{/** End Profile */}






































































{/** Language */}
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
{/** End Language */}




















          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
