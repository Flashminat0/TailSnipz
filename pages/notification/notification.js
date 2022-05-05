import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  

const Notification = () => {
  return (
    <div className={"h-screen w-screen grid place-content-center font susty"}>
      <>
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full   px-4 py-2 bg-white text-sm font-medium text-gray-700   focus:ring-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer" fill="none " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top absolute  mt-1 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
            <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
        >
          <div class="grid  gap- flex items-left">
            <div class="mb-2">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="h-18 w-32 rounded-full"
                alt=""
              />
            </div>
          </div>

          <div class=" text-sm font-medium text-gray-700 bg-white">
            <a
              href="#"
              
              class="block w-full px-1 py-2 "
            >
              Clothes you don't wear = extra cash. Sell them today. Upload now.
            </a>
            <a
              href="#"
              class="block w-full px-1 py-2 text-left"
            >
              16 hours ago
            </a>
          </div>

        </button>
            </Menu.Item>
            <Menu.Item>
            <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
        >
          <div class="grid  gap- flex items-left">
            <div class="mb-2">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="h-18 w-32 rounded-full"
                alt=""
              />
            </div>
          </div>

          <div class=" text-sm font-medium text-gray-700 bg-white">
            <a
              href="#"
              
              class="block w-full px-1 py-2 "
            >
              Clothes you don't wear = extra cash. Sell them today. Upload now.
            </a>
            <a
              href="#"
              class="block w-full px-1 py-2 text-left"
            >
              16 hours ago
            </a>
          </div>

        </button>
            </Menu.Item>
            <Menu.Item>
            <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
        >
          <div class="grid  gap- flex items-left">
            <div class="mb-2">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="h-18 w-32 rounded-full"
                alt=""
              />
            </div>
          </div>

          <div class=" text-sm font-medium text-gray-700 bg-white">
            <a
              href="#"
              
              class="block w-full px-1 py-2 "
            >
              Clothes you don't wear = extra cash. Sell them today. Upload now.
            </a>
            <a
              href="#"
              class="block w-full px-1 py-2 text-left"
            >
              16 hours ago
            </a>
          </div>

        </button>
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>

                  <button
                    type="submit"
                    className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    See All
                  </button>
             
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </>
    </div>
  );
}

export default Notification;

/*
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer" fill="none " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
*/




/*

      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full   px-4 py-2 bg-white text-sm font-medium text-gray-700   focus:ring-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 mr-2 hover:text-red-400 focus:text-red-400 cursor-pointer" fill="none " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right mt-1 w-80  rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
            <button
          type="button"
          class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b"
        >
          <div class="grid grid-cols-2 gap-1 flex items-left">
            <div class="mb-2">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="h-10 w-10 rounded-full"
                alt=""
              />
            </div>
          </div>

          <div class=" text-sm font-medium text-gray-700 bg-white">
            <a
              href="#"
              
              class="block w-full px-1 py-2 "
            >
              Clothes you don't wear = extra cash. Sell them today. Upload now.
            </a>
            <a
              href="#"
              class="block w-full px-1 py-2 text-left"
            >
              16 hours ago
            </a>
          </div>

        </button>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

*/