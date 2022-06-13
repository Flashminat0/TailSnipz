import React from 'react';

const ProfilePageWrapper = ({children}) => {
    return (
        <div className={'px-2 sm:px-6 md:px-8 lg:px-10'}>
            {children}
        </div>
    );
};

export default ProfilePageWrapper;