import React from "react";

const Name = () => {
  return (
    <div className={""}>
      <>
        {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}

        <div className="mt-10 sm:mt-0 bg-white p-4">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 flex items-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-medium leading-6 text-gray-800">
                  Your Photo
                </h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 col-span-2">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 sm:p-6">
                  <div className="flex md:float-right">
                    <div className="col-span-6 sm:col-span-3">
                      <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>

                    <div className="col-span-6 flex justify-center items-center">
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-susty rounded-md shadow-sm text-sm leading-4 font-medium text-susty hover:bg-gray-50 focus:outline-none "
                      >
                        Choose Photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1 md:pt-0 pt-4 flex items-center">
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-medium leading-6 text-gray-800">
                    About you
                  </h3>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="overflow-hidden sm:rounded-md">
                    <div className="px-4 md:py-5  sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                          <textarea
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 focus:ring-susty focus:border-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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

export default Name;