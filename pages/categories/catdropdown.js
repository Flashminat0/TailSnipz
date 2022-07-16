import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Dropdown from "./dropdown";

import { categoryObj } from "../../components/item/categoriesobj";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CatDropDown = () => {
  const [mainCatArray, setMainCatArray] = useState([]);

  return (
    <>
      <Popover className="z-0 relative">
        {({ open }) => (
          <>
            <div>
              <div className=" z-10 bg-white">
                <div className="w-2/3  flex gap-5 px-4 py-6 sm:px-6 lg:px-8 ">
                  {categoryObj.map((singleMainCategory) => (
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-900",
                        "group bg-white rounded-md inline-flex items-center text-sm font-susty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                      )}
                    >
                      <span
                        key={singleMainCategory.id}
                        onClick={() => {
                          setMainCatArray(singleMainCategory.subCategory);
                        }}
                      >
                        <span>{singleMainCategory.name}</span>
                      </span>
                    </Popover.Button>
                  ))}
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
              <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg pb-2">
                <div>
                  <Dropdown subCategory={mainCatArray} />
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
