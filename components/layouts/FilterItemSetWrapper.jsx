import React from 'react';

const FilterItemSetWrapper = ({children}) => {
    return (
        <div
            className={"grid grid-cols-2 grid-cols-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 gap-3 sm:gap-2 lg:gap-1 justify-items-center py-5"}>
            {children}
        </div>
    );
};

export default FilterItemSetWrapper;