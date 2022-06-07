import React from "react";

const ItemDeatils = () => {
  return (
    <div className={"font susty"}>
      <>
        <div class="p-4 max-w-sm bg-white shadow-md sm:p-6 lg:p-8 bg-white dark:border-gray-700">
          <div class="space-y-3 " action="#">
            <h5 class="text-3xl font-medium text-gray-900 dark:text-gray-700">
              $88.00
            </h5>
            <p class="text-sm font-medium text-gray-900 dark:text-gray-700">
              Swaps considered
            </p>
            <hr class="border-b-1 border-gray-400 my-1 mx-3"/>
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


            <hr class="border-b-1 border-gray-400 my-1 mx-full"/>

            <h3 class="text-xl font-medium text-gray-900 dark:text-gray-700">
              Brown Shirt
            </h3>
            <p class="text-xl font-medium text-gray-900 text-gray-500">
              Only work 934 times. Cat not inlcuded.
            </p>
            <div class="flex flex-col space-y-2">
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Bump
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Mark as sold
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Mark as swapped
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Mark as reserved
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Hide
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Edit listing
              </button>
              <button
                type="submit"
                class="w-full bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemDeatils;
