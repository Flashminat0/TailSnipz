import React from 'react';

const Newsfeedlayout = ({children}) => {
    return (
        <div>
            <div className={"text-2xl px-2 sm:px-4 lg:px-14 py-5"}>Newsfeed</div>
            <div className={"grid grid-cols-2 grid-cols-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5 px-2 sm:px-4 lg:px-14"}>
                {children}
            </div>
        </div>
    );
};

export default Newsfeedlayout;