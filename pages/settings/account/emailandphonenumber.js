import React, {useState} from 'react';
import {BadgeCheckIcon} from '@heroicons/react/outline';


const EmailAndPhoneNumber = () => {
    const [user, setUser] = useState({
        email: 'wyasaslowe@gmail.com',
        phone: '+1 (917) 593-3243',
        verified: false
    });


    return (
        <div className={`h-screen w-screen grid place-content-center`}>
            <>
                <div>
                    <div>
                        <h1>Email</h1>
                        <p>{user.email}</p>
                        <p><BadgeCheckIcon/>Verified</p>
                        <button>Change</button>
                    </div>
                    <div>
                        <h1>Phone number</h1>
                        <p>{user.phone}</p>
                        <button>Change</button>
                    </div>
                    <p>Your phone number will only be used to help you log in. It won’t be made public or used for
                        marketing purposes.</p>
                </div>
            </>
        </div>
    );
};

export default EmailAndPhoneNumber;
