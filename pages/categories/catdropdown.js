import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "./dropdown";

import { categoryObj } from "../../components/item/categoriesobj";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CatDropDown = () => {
  const onHoverHandler = (sections) => {
    console.log(sections);
  };
  return (
    <>
      <Popover className="z-0 relative">
        {({ open }) => (
          <>
            <div className="flex justify-start">
              <div className="relative z-10 bg-white">
                <div className="max-full mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-900",
                      "group bg-white rounded-md inline-flex items-center text-sm font-susty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    )}
                  >
                    <div className="flex justify-start gap-4">
                    {categoryObj.map((singleMainCategory) => (
                      <div mainkey={singleMainCategory.id}>
                        <span>{singleMainCategory.name}</span>
                      </div>
                    ))}
                    </div>
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
                <div className="">
                  <Dropdown />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default CatDropDown;

{
  /*




  return (
    <>
      {categoryObj.map((singleMainCategory) => {
        return (
          <div>
            {JSON.stringify(singleMainCategory.name)}
            <hr />
            {singleMainCategory.subCategory.map((singleSubCategoary) => {
              return (
                <div
                  onMouseEnter={() => {
                    onHoverHandler(singleSubCategoary.sections);
                  }}
                >
                  {JSON.stringify(singleSubCategoary.name)}
                </div>
              );
            })}
            <hr />
            <hr />
          </div>
        );
      })}
      {/* <Popover className="z-0 relative">
        {({ open }) => (
          <>
            <div class="flex justify-start">

              <div className="relative z-10 bg-white shadow">
                <div className="max-full mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    )}
                  >
                    <span>{data.name}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
))}

            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
                <div className="">
                  <Dropdown />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover> 
      </>
      );





*/
}
