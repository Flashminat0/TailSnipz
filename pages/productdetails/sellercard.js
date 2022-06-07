import React, {useEffect, useRef, useState} from "react";


const data = {
  "resources": [
    {
      "title": "Find me on Twitter",
      "imageUrl": "https://placeimg.com/300/300/any"
    },
    {
      "title": "Welcome to Ark Labs",
      "link": "https://ark-labs.co.uk",
      "imageUrl": "https://placeimg.com/300/300/animals"
    },
    {
      "title": "Some sort of third title",
      "imageUrl": "https://placeimg.com/300/300/architecture"
    },
    {
      "title": "A personal site perhaps?",
      "link": "https://robkendal.co.uk",
      "imageUrl": "https://placeimg.com/300/300/nature"
    },
    {
      "title": "Super item number five",
      "imageUrl": "https://placeimg.com/300/300/people"
    },
    {
      "title": "Super item number six",
      "imageUrl": "https://placeimg.com/300/300/tech"
    },
    {
      "title": "Super item number seven",
      "imageUrl": "https://placeimg.com/300/300/animals"
    },
    {
      "title": "Super item number eight",
      "imageUrl": "https://placeimg.com/300/300/people"
    },
    {
      "title": "Super item number the last",
      "imageUrl": "https://placeimg.com/300/300/tech"
    }
  ]
}

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
          
      


      </>
    </div>
  );
};

export default productdetails;
