import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Dropdown from "./dropdown";

import { categoryObj } from "../../components/item/categoriesobj";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CatDropDown = () => {
  const [mainCatArray, setMainCatArray] = useState([]);

  return (
    <div className="hidden md:block ">
      <div className="flex flex-row gap-2 md:w-3/4 lg:w-1/4">
        {categoryObj.map((singleMainCategory) => (
          <Popover className="z-0 relative" key={singleMainCategory.id}>
            {({ open }) => (
              <>
                <div>
                  <div className=" z-10 bg-white">
                    <div className={classNames(  open ? "border-b-2 border-susty": "" , "md:px-4 md:py-4 lg:py-4 lg:px-6 text-center  ")}>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900 " : "text-gray-900",
                          "group bg-white rounded-md inline-flex items-center text-sm font-susty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        )}
                      >
                        <span
                          
                          onClick={() => {
                            setMainCatArray(singleMainCategory.subCategory);
                          }}
                        >
                          <span>{singleMainCategory.name}</span>
                        </span>
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
                  <Popover.Panel className="absolute z-10 md:inset-x-5px lg:inset-x-0 transform shadow-xl  w-max">
                    <div>
                      <Dropdown subCategory={mainCatArray} />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default CatDropDown;
