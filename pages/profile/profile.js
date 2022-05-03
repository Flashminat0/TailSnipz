import React from 'react';
import Link from "next/link";

const Profile = () => {
    return (
        <div className={`bg-susty`}>
            <ul>
                <h1 className="text-3xl font-bold underline font-susty">
                    Hello Profile!
                </h1>
            </ul>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
};

export default Profile;
