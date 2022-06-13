import React from 'react';
import {FiStar} from 'react-icons/fi';

const ProfileReviews = () => {
    return (
        <div className={'flex flex-col items-center gap-5 min-h-screen my-10'}>
            <FiStar className={'w-24 h-24 text-gray-400'}/>
            <div className={'font-medium text-2xl'}>No reviews yet</div>
            <div className={'text-gray-500'}>Collecting reviews takes time, so check back soon</div>
        </div>
    );
};

export default ProfileReviews;