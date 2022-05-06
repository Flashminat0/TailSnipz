import React from 'react';

const Titleanddescription = () => {
    return (
        <div className={`h-screen w-screen grid place-content-center font-susty`}>
            <>
                <div className={`bg-gray-50 w-54 p-4 shadow`}>
                    <div className={`grid grid-cols-5 pb-2`}>
                        <p className={`font-medium text-lg`}>Title</p>
                        <input
                            name="title"
                            id="title"
                            className="pl-2 focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 block w-full rounded-md sm:text-sm border border-gray-300 h-10 col-start-3 col-span-3"
                            placeholder="e.g. White COS Sweater"
                        />
                    </div>

                    <hr/>

                    <div className={`grid grid-cols-5 pt-2`}>
                        <p className={`font-medium text-lg`}>Describe your item</p>
                        <textarea
                            rows={5}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-0 focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md col-start-3 col-span-3"
                            placeholder="e.g. only worn a few times, true to size ..."
                            defaultValue={''}
                        />
                    </div>

                </div>
            </>

        </div>
    );
};

export default Titleanddescription;
