import HeaderSection from '../components/header/HeaderSection'
import '../styles/globals.css'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <HeaderSection/>
            <Component {...pageProps} />
        </>
    )
}
