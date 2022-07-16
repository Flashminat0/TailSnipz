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

  return (
    <>
      <div className="h-full flex max-w-xl">
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
        <div className="hidden lg:flex lg:flex-shrink-0 ">
          <div className="flex flex-col w-64 ">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white shadow-md ">
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
                              "group flex items-center px-2 py-2 text-sm font-medium rounded-md gap-3"
                            )}
                          >
                            <div className="flex flex-row items center gap-3">
                              {subcat.icon}
                            </div>

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

        <div className="relative p-1">
          <Items sections={subCatArray} />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
