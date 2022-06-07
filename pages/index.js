import React from 'react';
import Link from "next/link";
import PopularItems from '../components/home/popularitems';

const Index = () => {
    return (
        <div className={``}>
            <ul>
                <h1 className="text-3xl font-bold underline font-susty">
                    Hello world!
                </h1>
            </ul>
            <Link href="/about">
                <a>About</a>
            </Link>
            <div>
            <Link href="settings/profile/profile">
                <a>Profile</a>
            </Link>
            </div>

            <div>
                <PopularItems />
            </div>
        </div>
    );
};

export default Index;
