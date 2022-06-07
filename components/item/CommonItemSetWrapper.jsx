import React from 'react';

const CommonItemSetWrapper = ({children}) => {
    return (
        <div
            className={"grid grid-cols-2 grid-cols-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5"}>
            {children}
        </div>
    );
};

export default CommonItemSetWrapper;