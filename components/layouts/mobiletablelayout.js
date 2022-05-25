import React from 'react';

const Mobiletablelayout = ({children}) => {
    return (
        <div className={"px-5 py-6"}>
            <div className="flex flex-col ">
                <div className="shadow-lg overflow-hidden border-b border-gray-200">
                    {children}
                    {/*TODO NAVIGATION DYNAMIC */}
                    <div
                        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <a
                                href="components/layouts/mobiletablelayout#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            <a
                                href="components/layouts/mobiletablelayout#"
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobiletablelayout;