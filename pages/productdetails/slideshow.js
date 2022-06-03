import React, { useState, useRef, useEffect, state } from "react";


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
                              <img
                                className="w-full aspect-square hidden"
                              />
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
          </div>
          {/* right side details */}




      </>
    </div>
  );
};

export default productdetails;
