import React from 'react';
import Link from "next/link";

const FooterSection = () => {
    return (
        <div className={'flex flex-row gap-4'}>
            <Link href={'/footer/policy'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Privacy Policy</a></Link>
            <Link href={'#'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Cookie Policy</a></Link>
            <Link href={'#'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Cookie Settings</a></Link>
            <Link href={'#'}><a className={'text-sm text-gray-500 font-semibold hover:underline'}>Terms & Conditions</a></Link>

        </div>
    );
};

export default FooterSection;