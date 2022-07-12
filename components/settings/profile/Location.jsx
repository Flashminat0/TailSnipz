import React, {useState, Fragment} from "react";
import {Listbox, Switch, Transition} from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

const Location = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={""}>
      <>
        {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}

        <div className="mt-10 sm:mt-0 bg-white p-4">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 flex items-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-medium leading-6 text-gray-800">
                  Country
                </h3>
              </div>
            </div>
            <div className="md:mt-0 md:col-span-2">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="">
                    <div className="col-span-6 sm:col-span-3">


                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-susty focus:border-none sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 flex items-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-medium leading-6 text-gray-800">
                  Town/City
                </h3>
              </div>
            </div>
            <div className="md:mt-0 md:col-span-2">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="">
                    <div className="col-span-6 sm:col-span-3">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-susty focus:border-none sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 ">
            <div className="col-span-2 flex items-center">
              <div className="">
                <h3 className="text-base font-medium leading-6 text-gray-800">
                  Show city in profile
                </h3>
              </div>
            </div>
            <div className=" mt-0 col-span-1">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6 flex items-center float-right">
                  <div className="float-right">
                    <div className="">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? "bg-susty" : "bg-gray-300"}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${
                            enabled ? "translate-x-[1.855rem]" : "translate-x-0"
                          }
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>

                    <div className="col-span-6 sm:col-span-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}
      </>
    </div>
  );
};

export default Location;
