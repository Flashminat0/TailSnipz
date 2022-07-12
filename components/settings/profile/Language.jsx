import React from "react";

const Language = () => {
  return (
    <div className={""}>
      <>
        {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}

        <div className="md:grid md:grid-cols-3 md:gap-6 bg-white p-4">
            <div className="md:col-span-1 flex items-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-medium leading-6 text-gray-800">
                    Language
                </h3>
              </div>
            </div>
            <div className="md:mt-0 md:col-span-2">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="">
                    <div className="col-span-6 sm:col-span-3">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-susty focus:border-none sm:text-sm"
                      >
                        <option>English</option>
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


        {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}
      </>
    </div>
  );
};

export default Language;