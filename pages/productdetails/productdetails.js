import React from "react";

const productdetails = () => {
  return (
    <div className={"px-40"}>
      <>
        <div class="grid grid-cols-5 gap-4">
          {/* left side details */}
          <div class="col-span-4 border">
            {/* Product Image set */}
            <div class="grid grid-rows-3 grid-flow-col">
              <div class="row-span-3 border">
                <img
                  className="object-fill h-200 w-196"
                  src="https://picsum.photos/500/550"
                  alt="Bonnie image"
                />
              </div>
              <div class="col-span-2 border">
                <img
                  className="object-fill h-100 w-196"
                  src="https://picsum.photos/400/250"
                  alt="Bonnie image"
                />
              </div>
              <div class="row-span-2 col-span-2 border">
                <img
                  className="object-fill h-100 w-196"
                  src="https://picsum.photos/400/250"
                  alt="Bonnie image"
                />
              </div>
            </div>
            {/* End Product Image set */}
            {/* Navigation and report  */}
            <div className="">
              <p className="font-susty py-5 pl-2 font-sm">
                {" "}
                Home / Women / Clothes / Jumpers & sweaters / Hoodies &
                sweatshirts / Bebe Hoodies & sweatshirts
              </p>
            </div>
            {/* End Navigation and report  */}
            {/* Members Product  */}
            <div className="">
              <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-full">
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                  >
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 ">
                        Member's items (8)
                      </h5>
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
                        <div className="ml-1">Shop bundles</div>
                      </button>

                      <button
                        type="button"
                        class="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                      >
                        <div className="ml-1">Save on shipping</div>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* End Members Product  */}
          </div>
          {/* right side details */}
          <div class="border ">
            {/* Side profile details */}
            <div class="p-4 w-80 bg-white shadow-md sm:p-6 lg:p-8 bg-white dark:border-gray-700">
              <div class="space-y-3 " action="#">
                <h5 class="text-3xl font-medium text-gray-900 dark:text-gray-700">
                  $88.00
                </h5>
                <p class="text-sm font-medium text-gray-900 dark:text-gray-700">
                  Swaps considered
                </p>
                <hr class="border-b-1 border-gray-400 my-1 mx-3" />
                <div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">Brand</div>
                    <div class="">NIKE</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">SIZE</div>
                    <div class="">XS</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">CONDITION</div>
                    <div class="...">SATISFACTORY</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">COLOUR</div>
                    <div class="...">BROWN,GRAY</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">LOCATION</div>
                    <div class="...">NEW YORK, NY, UNITED STATES</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">VIEWS</div>
                    <div class="...">1</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">FAVORITE ITEMS</div>
                    <div class="...">2</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">UPLOADED</div>
                    <div class="">5 MINUTES AGO</div>
                  </div>
                </div>

                <hr class="border-b-1 border-gray-400 my-1 mx-full" />

                <h3 class="text-xl font-medium text-gray-900 dark:text-gray-700">
                  Brown Shirt
                </h3>
                <p class="text-xl font-medium text-gray-900 text-gray-500">
                  Only work 934 times. Cat not inlcuded.
                </p>
                <div class="flex flex-col space-y-2">
                  <button
                    type="submit"
                    class="w-full bg-transparent  text-susty font-semibold hover:text-white py-2 px-4 border border-susty hover:border-transparent rounded"
                  >
                    Buy Now
                  </button>
                  <button
                    type="submit"
                    class="w-full text-white bg-susty  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm px-5 py-2.5 text-center "
                  >
                    Buy now
                  </button>
                  <button
                    type="submit"
                    class="w-full bg-transparent  text-susty font-semibold hover:text-white py-2 px-4 border border-susty hover:border-transparent rounded"
                  >
                    Remove from favorites
                  </button>
                </div>
              </div>
            </div>
            {/* Side profile details */}

            {/*Profile card */}

            <div class="mt-8 grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-80">
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
            {/* Profile card */}
          </div>
        </div>

        <div class="grid grid-cols-5 gap-4">
          <div class="col-span-4 ...">
            <div class="h-56 grid grid-cols-4 gap-4 content-start ...">
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-50   bg-white shadow-md dark:bg-white dark:border-gray-700 ">
                  <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border w-full pt-2">
                    <div>
                      <a
                        href="#"
                        class="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white"
                      >
                        <img
                          class="mb-3 ml-3 mt-1 w-12 h-12 rounded-full shadow-lg"
                          src="https://picsum.photos/200"
                          alt="Bonnie image"
                        />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <p class="mb-3 font-susty text-gray-700">username</p>
                        </div>
                      </a>
                    </div>
                  </div>

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
                        <div className="col-end-7 col-span-2 text-gray-700">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="...">05</div>
        </div>
      </>
    </div>
  );
};

export default productdetails;
