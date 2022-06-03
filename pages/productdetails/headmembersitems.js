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
            {/* Navigation and report  */}
            <div className="">
              <nav class="flex bg-gray-100" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center space-x-4">

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
                        aria-current="page"
                      >
                        Beauty
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            {/* End Navigation and report  */}
            {/* Members Product  */}
            <div className="">
              <div class="grid grid-cols-1 divide-y divide-gray-900 flex flex-col items-center bg-white rounded border shadow-md md:flex-row w-full">
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
        </div>
      </>
    </div>
  );
};

export default productdetails;
