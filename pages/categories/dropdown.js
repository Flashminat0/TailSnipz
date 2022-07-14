/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Items from "./items";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ subCategory }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subCatArray, setSubCatArray] = useState([]);

  useEffect(() => {
    setSubCatArray(subCategory[0].sections);
  }, []);


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
        <Menu.Items className="origin-top absolute w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1 flex">{props.children}</div>
        </Menu.Items>
      </Transition>
    );
  }

  return (
    <>
      <div className="h-full flex">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            ></Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col  pb-4 overflow-y-auto">
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    <>
                      {subCategory.map((subcat) => (
                        <span
                          key={subcat.id}
                          onClick={() => {
                            setSubCatArray(subcat.sections);
                          }}
                        >
                          <a
                            className={classNames(
                              subcat.current
                                ? "bg-gray-200 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            {/* 
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        */}
                            {subcat.name}
                          </a>
                        </span>
                      ))}
                    </>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden border-4 relative z-0">
            <Items sections={subCatArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
