import React from "react";
import Link from "next/link";

const profilecard = () => {
  return (
    <div className={""}>
      <>
        <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-fit">
          <div>
            <a
              href="#"
              class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
            >
              <img
                class="mb-3 ml-3 mt-1 w-14 h-14 rounded-full shadow-lg"
                src="https://picsum.photos/200"
                alt="Bonnie image"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 ">
                  User Name
                </h5>
                <p class="mb-3 font-normal text-gray-700 text-gray-400">
                  No views yet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="flex flex-col items-center bg-white   shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 bg-white"
            >
              <div class="flex flex-col justify-between p-4 leading-normal">
                <button
                  type="button"
                  class="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-1">NEW YORK, NY, United Ststes.</div>
                </button>

                <button
                  type="button"
                  class="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="ml-1">Last seen 6 minutes ago.</div>
                </button>
              </div>
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default profilecard;
