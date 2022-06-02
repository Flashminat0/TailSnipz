import React from 'react';

const BasicPageWrapper = ({children}) => {
    return (
        <div className={'px-2 sm:px-4 lg:px-20'}>
            {children}
        </div>
    );
};

export default BasicPageWrapper;