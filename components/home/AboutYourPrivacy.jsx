/* This example requires Tailwind CSS v2.0+ */
import {useRef, useState} from "react";
import {Disclosure, Switch} from "@headlessui/react";

const AboutYourPrivacy = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const [showPopUp, setShopPopUp] = useState(true);

  const [enabled, setEnabled] = useState(false);

  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
      <>
        <div>
          {showPopUp ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-2xl ">
                  {/*content*/}
                  <div className="overflow-y-auto h-[640px]  border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h8 className="text-xl font-semibold">
                        About Your Privacy
                      </h8>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-gray-700  float-right text-lg leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShopPopUp(false)}
                      >
                        <span className="text-gray-700 text-md">x</span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="text-sm mt-1">
                        We process your data to deliver content or
                        advertisements and measure the delivery of such content
                        or advertisements to extract insights about our website.
                        We share this information with our partners on the basis
                        of consent. You may exercise your right to consent,
                        based on a specific purpose below or at a partner level
                        in the link under each purpose. These choices will be
                        signaled to our vendors participating in the
                        Transparency and Consent Framework.
                      </p>
                      <span
                        href="#"
                        class="text-susty no-underline hover:underline"
                      >
                        More information
                      </span>
                      <p className="mt-5 text-sm">Consent ID: 88309039</p>
                      <p className="text-sm">
                        Consent Date: Fri May 13 2022 17:23:41 GMT+0530 (India
                        Standard Time)
                      </p>
                      <p className="mt-5 text-xl">Manage Consent Preferences</p>
                      <div className="border mt-2">
                        <div className="border-2 border-gray-700 border-b-0">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <div
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500`}
                                  >
                                    {open ? (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    ) : (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    )}
                                  </div>

                                  <span className="pr-80 mr-12">
                                    What is your refund policy?
                                  </span>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  If you're unhappy with your purchase for any
                                  reason, email us within 90 days and we'll
                                  refund you in full, no questions asked.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>

                        <div className="border-2 border-gray-700 border-b-0">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">

                                    {open ? (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    ) : (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    )}
                                  

                                  <span className="pr-72 mr-6">
                                    What is your refund policy?
                                  </span>

                                  <div className="">
                                    <Switch
                                      checked={enabled}
                                      onChange={setEnabled}
                                      className={`${
                                        enabled ? "bg-susty" : "bg-gray-300"
                                      }
                                    relative inline-flex h-[26px] w-[44px] 
                                    shrink-0 cursor-pointer rounded-full 
                                    border-2 border-transparent transition-colors duration-200
                                    ease-in-out focus:outline-none focus-visible:ring-2  
                                    focus-visible:ring-white focus-visible:ring-opacity-75`}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className={`${
                                          enabled
                                            ? "translate-x-4"
                                            : "translate-x-0"
                                        }
                                    pointer-events-none inline-block h-[22px] w-[22px] 
                                    transform rounded-full bg-white shadow-lg ring-0 
                                    transition duration-1000 ease-in-out`}
                                      />
                                    </Switch>
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  If you're unhappy with your purchase for any
                                  reason, email us within 90 days and we'll
                                  refund you in full, no questions asked.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>

                        <div className="border-2 border-gray-700 border-b-0">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <div
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500`}
                                  >
                                    {open ? (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    ) : (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    )}
                                  </div>

                                  <span className="pr-80 mr-12">
                                    What is your refund policy?
                                  </span>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  If you're unhappy with your purchase for any
                                  reason, email us within 90 days and we'll
                                  refund you in full, no questions asked.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>

                        <div className="border-2 border-gray-700">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between   px-4 py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <div
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-purple-500`}
                                  >
                                    {open ? (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    ) : (
                                      <>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </>
                                    )}
                                  </div>

                                  <span className="pr-80 mr-12">
                                    What is your refund policy?
                                  </span>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  If you're unhappy with your purchase for any
                                  reason, email us within 90 days and we'll
                                  refund you in full, no questions asked.
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-red-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShopPopUp(false)}
                      >
                        Confirm my choices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </>
    </div>
  );
};

export default AboutYourPrivacy;
