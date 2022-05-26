import React from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

const Tablelayout = ({children}) => {
    return (
        <div className={"px-5 py-6"}>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-lg shadow-lg">
                            {children}
                            {/*TODO NAVIGATION DYNAMIC */}
                            <div
                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span
                                            className="font-medium">10</span> of{' '}
                                            <span className="font-medium">97</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                             aria-label="Pagination">
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
                                            </a>
                                            {/* Current: "z-10 bg-red-50 border-red-500 text-red-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                            <a
                                                href="components/layouts/tablelayout#"
                                                aria-current="page"
                                                className="z-10 bg-red-50 border-red-400 text-red-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                2
                                            </a>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                3
                                            </a>
                                            <span
                                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                        ...
                                        </span>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                8
                                            </a>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                9
                                            </a>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                            >
                                                10
                                            </a>
                                            <a
                                                href="components/layouts/tablelayout#"
                                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tablelayout;