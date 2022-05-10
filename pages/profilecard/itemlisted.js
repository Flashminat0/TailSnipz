import React from "react";
import Link from "next/link";

const ItemListed = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font-susty"}>
      <>
        <div class="flex items-center justify-center h-screen w-screen ">
          <div class="bg-gray-200 text-white font-bold  border shadow-lg p-10">
            <div class="bg-red-200 w-96 text-white font-bold shadow-sm  shadow-lg p-10 ">
              <div class="pb-50 w-80 max-w-sm bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                <a href="#">
                  <img
                    class="object-contain h-100 w-96"
                    src="https://picsum.photos/200"
                    alt=""
                  />
                </a>

                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                  <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">
                      Product Name
                    </p>
                    <p class="text-md text-gray-800 mt-0">$340</p>
                  </div>
                  <div class="flex flex-col-reverse mb-1  mr-2 group cursor-pointer border-5 border-red-400 pb-5 ">
                    <div class="grid grid-cols-2 ">
                      <div class="col-start-1 col-end-3 text-gray-700">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 group-hover:opacity-70"
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
                      <div class="col-end-7 col-span-2 text-gray-700">3</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-center">
                  <p class="text-xl text text-gray-700"> Item listed</p>
                </div>

                <div class="text-center">
                  <p class="text-sm text text-gray-700">
                    {" "}
                    Did you know that you appear in search results more often
                    when you have more listings?
                  </p>
                </div>

                <button
                  type="submit"
                  class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  List another
                </button>

                <button
                  type="submit"
                  class="mt-2 w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Mark as sold
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
