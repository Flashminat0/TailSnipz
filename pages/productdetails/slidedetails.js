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
        <div class="grid grid-cols-5 gap-4">
          {/* left side details */}

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

                <hr className="border-b-1 border-gray-400 my-1 mx-full" />

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


          </div>
        </div>


      </>
    </div>
  );
};

export default productdetails;
