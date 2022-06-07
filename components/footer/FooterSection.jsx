import React from 'react';
import Link from "next/link";

const FooterSection = () => {
    return (
        <div className={'flex flex-row gap-4 my-3'}>
            <Link href={'/footer/policy'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Privacy Policy</a></Link>
            <Link href={'/footer/cookiepolicy'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Cookie Policy</a></Link>
            <Link href={'/footer/privacy'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Cookie Settings</a></Link>
            <Link href={'/footer/termsandconditions'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Terms & Conditions</a></Link>
        </div>
    );
};

export default FooterSection;