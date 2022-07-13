import React from 'react';
import Link from "next/link";

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
            <Link href="/final/settings/profile/">
                <a>Profile</a>
            </Link>
            </div>

        </div>
    );
};

export default Index;
