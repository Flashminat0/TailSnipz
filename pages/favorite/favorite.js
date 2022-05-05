import React from "react";

const NotificationView = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font susty"}>
      <>
        <div class="max-w-sm bg-white    shadow-md dark:bg-white dark:border-gray-700">
          <div class="flex items-center space-x-4 mb-3 ml-2 mt-2">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://picsum.photos/200"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate text-gray-700">
                Neil Sims
              </p>
            </div>
          </div>

          <a href="#">
            <img
              class="object-contain h-100 w-96"
              src="https://picsum.photos/200"
              alt=""
            />
          </a>

        <ul class="mb-2 mt-2 ml-2 w-auto text-sm font-medium text-gray-900 bg-white   bg-white dark:border-gray-600 text-gray-700">
        <table class="table-fixed">
  <thead>
    <tr>
      <th>Shirt</th>
    <th>    

        <div class="ml-64">   
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer"
                  fill="none "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                </div> 


    </th>
      <th>
          <div class="mr-1">5</div>
    </th>
    </tr>
  </thead>
</table>
        </ul>

















        </div>
      </>
    </div>
  );
};

export default NotificationView;



/*

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer"
                  fill="none "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

*/
