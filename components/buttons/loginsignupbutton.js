import React, {useEffect, useState} from 'react'
// import AuthModal from '../auth/AuthModal'
import {useLocalStorage} from '@mantine/hooks'
import {toast} from 'react-toastify'
import {signOut} from 'firebase/auth'
// import {firebaseApp} from '../../services/firebase'

const LoginSignupButton = ({loggedIn}) => {
    const [openModal, setOpenModal] = useState(false)

    const [sustyAuth, setSustyAuth] = useLocalStorage({
        key: 'susty',
        defaultValue: {},
    })
    // const [loggedIn, setLoggedIn] = useState(true)

    //Firebase auth object
    // const auth = getAuth(firebaseApp)

    // useEffect(() => {
    //     if (Object.keys(sustyAuth).length > 0) {
    //         setLoggedIn(true)
    //     } else {
    //         setLoggedIn(false)
    //     }
    // }, [sustyAuth])

    const logoutHandler = () => {
        toast.info('Logging out...')
        setSustyAuth({})
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
    }

    return (
        <>
            {loggedIn ? (
                null
                // <>
                //     <button
                //         onClick={logoutHandler}
                //         type="button"
                //         className="w-full items-center px-4 py-1.5 border border-susty shadow-sm text-sm font-medium rounded-md text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-susty"
                //     >
                //         Logout
                //     </button>
                // </>
            ) : (
                <>
                    <button
                        onClick={() => setOpenModal(true)}
                        type="button"
                        className="w-full items-center md:px-2.5 pb-1.5 pt-1 md:mr-2 md:-ml-2 border border-susty shadow-sm text-sm font-medium rounded-md text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-susty"
                    >
                        Login&nbsp;|&nbsp;Signup
                    </button>
                </>
            )}

            {/* <AuthModal openState={openModal} setOpenModal={setOpenModal} /> */}
        </>
    )
}

export default LoginSignupButton
