import React from 'react';
import Link from "next/link";

const Index = () => {
    return (
        <div className={`bg-susty`}>
            <ul>
                <h1 className="text-3xl font-bold underline font-susty">
                    Hello world!
                </h1>
            </ul>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
};

export default Index;
