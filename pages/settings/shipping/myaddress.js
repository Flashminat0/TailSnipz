import React from 'react';

const Myaddress = () => {
    return (
        <div>
            <>
                <div className="w-full pt-2">
                    <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex justify-between w-full px-4 py-2 text-md font-bold text-left text-red-400 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                        <span>Filter</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? '' : 'transform rotate-180'
                                            } w-5 h-5 text-red-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <CustomerFilter
                                            handleFilter={handleFilter}
                                            requestingData={requestingData}
                                            setRequestingData={setRequestingData}/>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Myaddress;