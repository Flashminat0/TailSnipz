import React from 'react';
import {StarIcon} from "@heroicons/react/solid";

const RatesInProfile = ({customer}) => {
    return (
        <div>
            {Array(parseInt(customer.rate)).fill(0).map((x, index) => {
                return <StarIcon key={index} className={'w-5 h-5 text-amber-400'}/>
            })}
            {Array(5 - parseInt(customer.rate)).fill(0).map((x, index) => {
                return <StarIcon key={index} className={'w-5 h-5 text-gray-300'}/>
            })}
        </div>
    );
};

export default RatesInProfile;