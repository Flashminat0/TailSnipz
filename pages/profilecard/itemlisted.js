import React from "react";
import Link from "next/link";

const ItemListed = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
      <>
        <div className="flex items-center justify-center h-screen w-screen ">
          <div className="bg-gray-200 text-white font-bold  border shadow-lg p-6 ">
            <div className="bg-red-200 w-96 text-white font-bold shadow-sm  shadow-lg pl-8 pt-10 pr-10 ">
              <div className="pb-50 w-80 max-w-sm bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                <a href="#">
                  <img
                    className="object-contain h-100 w-96"
                    src="https://picsum.photos/200"
                    alt=""
                  />
                </a>

                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                  <div className="mb-2">
                    <p className="text-lg font-semibold text-gray-900 mb-0">
                      $88.00
                    </p>
                    <p className="text-md text-gray-500 mt-0">Nike</p>
                    <p className="text-md text-gray-500 mt-0">XS</p>
                  </div>
                  <div className="flex flex-col-reverse mb-8  mr-2 group cursor-pointer border-5 border-red-400 pb-5 ">
                    <div className="grid grid-cols-2 ">
                      <div className="col-start-1 col-end-3 text-gray-700">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 group-hover:opacity-70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="gray"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="col-end-7 col-span-2 text-gray-700">3</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-5">
                <div className="text-center">
                  <p className="text-xl text text-gray-700"> Item listed</p>
                </div>

                <div className="text-center">
                  <p className="text-sm text text-gray-700 text-left mb-6 font-susty">
                    {" "}
                    Did you know that you appear in search results more often
                    when you have more listings?
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full   text-white  hover:text-white py-2 px-4 bg-susty rounded"
                >
                  List another
                </button>

                <button
                  type="submit"
                  className="mt-2 w-full bg-transparent  text-susty  hover:text-white py-2 px-4  rounded"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemListed;
