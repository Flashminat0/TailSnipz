import React, { useState, useRef } from "react";
import { Fragment } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import Image from "next/image";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const catWomen = [
  { id: 1, name: "See All", childs: [] },
  {
    id: 2,
    name: "Clothes",

    childs: ["item2", "item8"],
  },
  {
    id: 3,
    name: "Shoes",

    childs: ["item3", "item7"],
  },
  { id: 4, name: "Bags", childs: ["item4", "item6"] },
  {
    id: 5,
    name: "Accessories",

    childs: ["item5", "item2"],
  },
  { id: 6, name: "Beauty", childs: ["item6", "item4"] },
];

const catMen = [
  { id: 1, name: "See All", childs: [] },
  {
    id: 2,
    name: "Clothes",

    childs: ["item2", "item8"],
  },
  { id: 3, name: "Shoes", childs: ["item3", "item7"] },
  { id: 4, name: "Bags", childs: ["item4", "item6"] },
  {
    id: 5,
    name: "Accessories",

    childs: ["item5", "item2"],
  },
  { id: 6, name: "Grooming", childs: ["item6", "item4"] },
];

const catKids = [
  { id: 1, name: "See All", childs: [] },
  {
    id: 2,
    name: "Clothes",

    childs: ["item2", "item8"],
  },
  {
    id: 3,
    name: "Shoes",

    childs: ["item3", "item7"],
  },
  { id: 4, name: "Bags", childs: ["item4", "item6"] },
  {
    id: 5,
    name: "Accessories",

    childs: ["item5", "item2"],
  },
  {
    id: 6,
    name: "Grooming",

    childs: ["item6", "item4"],
  },
];

const people = [
  {
    id: 1,
    name: "Wade Cooper",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
  },
  {
    id: 3,
    name: "Devon Webb",
  },
  {
    id: 4,
    name: "Tom Cook",
  },
];

const Header = () => {
  //const navigate = useNavigate();

  function SubCategories(props) {
    return (
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className=" origin-top absolute w-auto h-[120] 
                      rounded shadow-lg bg-white ring-1 ring-black 
                      ring-opacity-5 divide-y divide-red-400 focus:outline-none"
        >
          <div className="py-1 flex">{props.children}</div>
        </Menu.Items>
      </Transition>
    );
  }

  function DropDownItem(props) {
    const items = props.data.map((item) => (
      <Menu.Item key={item.id.toString()}>
        {({ active }) => (
          <div
            onMouseOver={() => setChild(item.id)}
            onClick={() => {
              item.id === 1;

              {
                /** 
                ? navigate(`/allproducts?mainProductCategory=${props.parent}`)
                : navigate(
                    `/allproducts?mainProductCategory=${props.parent}&category=${item.name}`
                  );
*/
              }
            }}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "grid grid-cols-8 block px-4 py-6 text-sm"
            )}
          >
            <div className="col-span-7">{item.name}</div>
            <div className="col-span-1">{item.icon}</div>
          </div>
        )}
      </Menu.Item>
    ));
    return (
      <>
        <div className="border-r border-gray-300 w-40 text-sm">{items}</div>
      </>
    );
  }

  const [child, setChild] = useState(1);

  function LoadChilds(props) {
    const childs = props.data[props.child - 1];
    const subItems = childs.childs.map((item) => (
      <Menu.Item key={item.toString()}>
        {({ active }) => (
          <div
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {item}
          </div>
        )}

        {/**  onClick={() => navigate(`/allproducts?mainProductCategory=${props.parent}&category=${childs.name}&subCategory=${item}`)} */}
      </Menu.Item>
    ));
    return <div className="w-56">{subItems}</div>;
  }

  const dropdownRef = useRef();
  const [selected, setSelected] = useState(people[3]);

  return (
    <div className={"px-60"}>
      <>
        <ul class="flex place-content-center gap-1">
          {/*logo */}
          <li class="mr-2">
            <Image src="/Susty.png" width={85} height={44} />
          </li>
          {/* search*/}
          <li class="mr-2">
            <div className=" pr-2 relative rounded shadow-sm mt-2  w-[50rem]">
              <input
                type="text"
                className=" bg-gray-100 
                  block w-full pl-36 
                  pr-40 ml-4  sm:text-sm border-gray-100 rounded"
                placeholder="Search for items"
              />
              <div className="absolute inset-y-0 left-0 pl-1 flex items-center">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="ml-3 relative">
                        <Listbox.Button className="relative w-full bg-gray-100   border-r-2 border-gray-300  shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <span className="flex items-center">
                            <span className="ml-3 block truncate">
                              {selected.name}
                            </span>
                          </span>
                          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options
                            className="  absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 
                                              rounded-md py-1 text-base ring-1 ring-black 
                                              ring-opacity-5 overflow-auto 
                                              focus:outline-none sm:text-sm"
                          >
                            {people.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-indigo-600"
                                      : "text-gray-900",
                                    "cursor-default select-none relative py-2 pl-3 pr-9"
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <div className="flex items-center">
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "ml-3 block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>
                                    </div>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
          </li>
          {/* message*/}
          <li class="mr-2">
            <button
              type="button"
              class="inline-flex w-full justify-center mt-2 ml-4 font-sm rounded text-sm px-1  mb-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </li>
          {/* notification*/}
          <li class="mr-2">
            <Menu as="div" className="inline-flex w-full justify-center mt-2 ">
              <div>
                <Menu.Button className="">
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
                <Menu.Items className="origin-top absolute z-10 mt-8 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                            Clothes you don't wear = extra cash. Sell them
                            today. Upload now.
                          </a>
                          <a
                            href="#"
                            className="block w-full px-1 py-2 text-left"
                          >
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
                            Clothes you don't wear = extra cash. Sell them
                            today. Upload now.
                          </a>
                          <a
                            href="#"
                            className="block w-full px-1 py-2 text-left"
                          >
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
                            Clothes you don't wear = extra cash. Sell them
                            today. Upload now.
                          </a>
                          <a
                            href="#"
                            className="block w-full px-1 py-2 text-left"
                          >
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
          </li>
          {/* favorite*/}
          <li class="mr-2">
            <button
              type="button"
              class="inline-flex w-full justify-center mt-2  font-sm rounded text-sm px-1  mb-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </li>
          {/* profile */}
          <li class="mr-2">
            <Menu
              as="div"
              className="inline-flex w-full justify-center relative inline-block text-left mt-1"
            >
              <div>
                <Menu.Button className="text-sm  text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer"
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
                <Menu.Items className="absolute right-0 mt-12 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="">
                    <Menu.Item>
                      <button
                        className={
                          "bg-gray-100  text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                        }
                      >
                        Account
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
          </li>
          {/* sell now */}
          <li class="mr-2">
            <button
              type="button"
              class="text-white bg-susty  mt-2  font-sm rounded text-sm px-1 py-1  mb-2 "
            >
              Sell now
            </button>
          </li>
          {/* questions */}
          <li class="mr-2">
          <button
              type="button"
              class="inline-flex w-full justify-center mt-2  font-sm rounded text-sm px-1  mb-2 "
            >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
            </button>
          </li>
          {/* language */}
          <li class="mr-2">
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="inline-flex justify-center bg-white text-md font-medium text-gray-700 mt-2">
                  EN
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          </li>
        </ul>

        {/* Dropdown */}
        <div className="max-w-full mx-auto px-2 px-6 px-8 ">
          <row
            className="bg-white w-full ml-6 pl-6 border-4"
            style={{ position: "fixed", border: 0 }}
          >
            <div offset={2}>
              <div className="flex w-full gap-6 text-sm cursor-pointer mt-0.5">
                <Menu as="div">
                  <div
                    className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
                    onClick={() => navigate(`/allproducts`)}
                  >
                    <p>Shop</p>
                  </div>
                </Menu>

                <Menu as="div">
                  <Menu.Button
                    className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
                  >
                    <p>Women</p>
                  </Menu.Button>
                  <div ref={dropdownRef}>
                    <SubCategories>
                      <DropDownItem data={catWomen} parent="Women" />
                      <LoadChilds
                        child={child}
                        data={catWomen}
                        parent="Women"
                      />
                    </SubCategories>
                  </div>
                </Menu>

                <Menu as="div">
                  <Menu.Button
                    className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
                  >
                    <p>Men</p>
                  </Menu.Button>
                  <div ref={dropdownRef}>
                    <SubCategories>
                      <DropDownItem data={catMen} parent="Men" />
                      <LoadChilds child={child} data={catMen} parent="Men" />
                    </SubCategories>
                  </div>
                </Menu>

                <Menu as="div">
                  <Menu.Button
                    className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
                  >
                    <p>Kids</p>
                  </Menu.Button>
                  <div ref={dropdownRef}>
                    <SubCategories>
                      <DropDownItem data={catKids} parent="Kids" />
                      <LoadChilds child={child} data={catKids} parent="Kids" />
                    </SubCategories>
                  </div>
                </Menu>

                <Menu as="div">
                  <div
                    className={`border-b-2 border-b-white hover:border-b-red-400 p-2`}
                  >
                    <p>About</p>
                  </div>
                </Menu>
              </div>
            </div>
          </row>
        </div>
        {/* Dropdown */}
      </>
    </div>
  );
};

export default Header;
