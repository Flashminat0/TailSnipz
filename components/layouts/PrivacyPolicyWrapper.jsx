import React from 'react';

const PrivacyPolicyWrapper = ({children}) => {
    return (
        <div className={'bg-gray-100 px-2 sm:px-6 md:px-10 lg:px-52'}>
            {children}
        </div>
    );
};

export default PrivacyPolicyWrapper;