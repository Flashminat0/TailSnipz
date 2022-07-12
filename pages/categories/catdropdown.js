import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Dropdown from "./dropdown";

import { categoryObj } from "../../components/item/categoriesobj";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CatDropDown = () => {
  const [mainCatId, setMainCatId] = useState([]);

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
                        <button
                          mainkey={singleMainCategory.id}
                          onClick={() => {
                            setMainCatId(singleMainCategory.subCategory);
                          }}
                        >
                          <span>{singleMainCategory.name}</span>
                        </button>
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
                  <Dropdown subCategory={mainCatId} />
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