import React, { useState, useRef, useEffect, state } from "react";

const data = {
  resources: [
    {
      title: "Find me on Twitter",
      imageUrl: "https://placeimg.com/300/300/any",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Some sort of third title",
      imageUrl: "https://placeimg.com/300/300/architecture",
    },
    {
      title: "A personal site perhaps?",
      link: "https://robkendal.co.uk",
      imageUrl: "https://placeimg.com/300/300/nature",
    },
    {
      title: "Super item number five",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number six",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
    {
      title: "Super item number seven",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Super item number eight",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number the last",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
  ],
};

const productdetails = () => {
  const [product, setProduct] = useState({
    id: "",
    brand: "",
    condition: "",
    colour: "",
    location: "",
    paymentOption: "",
    views: "",
    uploaded: "",
    images: [],
    description: "product description",
    long_description: "long description",
  });

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className={"px-60"}>
      <>
        <div class="grid grid-cols-5 gap-4">
          {/* left side details */}
          <div class="col-span-4 border">
            {/* Product Image set */}

            <section class="overflow-hidden text-gray-700">
              <div class="container px-5 py-2 mx-auto">
                <div className="carousel mx-auto">
                  <div className="relative overflow-hidden">
                    <div className="flex justify-between absolute top left w-full h-full">
                      <button
                        onClick={movePrev}
                        className="hover:bg-red-400/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("prev")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-20 -ml-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <span className="sr-only">Prev</span>
                      </button>
                      <button
                        onClick={moveNext}
                        className="hover:bg-red-400/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled("next")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-20 -ml-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                    <div
                      ref={carousel}
                      className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                      {data.resources.map((resource, index) => {
                        return (
                          <div
                            key={index}
                            className="carousel-item text-center relative w-96 h-96 snap-start"
                          >
                            <a
                              className="h-[30rem] w-[30rem] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                              style={{
                                backgroundImage: `url(${
                                  resource.imageUrl || ""
                                })`,
                              }}
                            >
                              <img className="w-full aspect-square hidden" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* End Product Image set */}
            {/* Navigation and report  */}
            <div className="">
              <nav
                class="flex bg-gray-100 grid grid-cols-6"
                aria-label="Breadcrumb"
              >
                <ol
                  role="list"
                  class="flex items-center space-x-1 col-start-1 col-end-3"
                >
                  <li>
                    <div class="flex items-center">
                      <a
                        href="#"
                        class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Home
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                      <a
                        href="#"
                        class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Women
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <svg
                        class="flex-shrink-0 h-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                      <a
                        href="#"
                        class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        aria-current="page"
                      >
                        Beauty
                      </a>
                    </div>
                  </li>
                </ol>
                <ol class="col-end-7 col-span-1 place-self-end mx-2 my-1">
                  <li className="">
                    <div class="flex items-center">
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
                          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                      </svg>
                    </div>
                  </li>
                </ol>
              </nav>
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
            <div class="p-4  bg-white shadow-md bg-white">
              <div class="space-y-2 " action="#">
                <h5 class="text-3xl font-medium text-gray-900">$88.00</h5>
                <div className="grid grid-cols-5">
                  <div className="pt-10">
                    <div className="bg-green-300 rounded-full h-8 w-8 pl-1.5 pt-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col-span-4">
                    <p className="text-sm">
                      Our Buyer Protection is added for a fee to every purchase
                      made using the “Buy now” button. Buyer Protection includes
                      our Refund Policy.
                    </p>
                  </div>
                </div>
                <hr class="border-b-1 border-gray-400 my-1 mx-full" />
                <p className="text-sm">
                  Buyer Protection fee $0.70 + 5% of the item’s price
                </p>
                <hr className="border-b-1 border-gray-400 my-1 mx-full" />
                <div className="text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">Brand</div>
                    <div className="">{product.brand}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">SIZE</div>
                    <div className="">{product.size}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">CONDITION</div>
                    <div className="...">{product.condition}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">COLOUR</div>
                    <div className="...">{product.colour}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">PAYMENT OPTIONS</div>
                    <div className="...">{product.paymentOption}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">LOCATION</div>
                    <div className="...">{product.location}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">VIEWS</div>
                    <div className="...">{product.views}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="...">UPLOADED</div>
                    <div className="">{product.uploaded}</div>
                  </div>
                </div>

                <hr className="border-b-1 border-gray-300 my-1 mx-full" />

                <h3 className="text-base font-medium text-gray-900 dark:text-gray-700">
                  {product.description}
                </h3>
                <p className="text-sm font-medium text-gray-900 text-gray-500">
                  {product.long_description}
                </p>
                <div className="flex flex-col space-y-2">
                  <button
                    type="submit"
                    className="w-full bg-transparent  text-susty font-semibold py-2 px-4 border border-susty  rounded"
                  >
                    Message seller
                  </button>
                  <button
                    type="submit"
                    className="w-full text-white bg-susty  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm px-5 py-2.5 text-center "
                  >
                    Buy now
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-transparent  text-susty font-semibold  py-2 px-4 border border-susty rounded"
                  >
                    Remove from favorites
                  </button>
                </div>
              </div>
            </div>
            {/* Side profile details */}

            {/*Profile card */}

            <div className=" mt-8 grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row ">
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white   shadow-md md:flex-row md:max-w-xl  dark:border-gray-700 bg-white"
                >
                  <img
                    className="mb-3 ml-3 mt-1 w-14 h-14 rounded-full shadow-lg"
                    src="https://picsum.photos/200"
                    alt="Bonnie image"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 ">
                      User Name
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 text-gray-400">
                      No views yet.
                    </p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white   shadow-md md:flex-row dark:border-gray-700 bg-white"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-1 py-1 text-sm   border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
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

              <div class="grid grid-cols-2 gap-1 divide-x">
                <div>
                  <button
                    type="submit"
                    className="w-full text-gray-700   font-medium text-sm px-5 py-2.5 text-center "
                  >
                    Message
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full text-gray-700    font-medium text-sm px-5 py-2.5 text-center "
                  >
                    Follow
                  </button>
                </div>
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
