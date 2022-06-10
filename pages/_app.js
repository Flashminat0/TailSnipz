import DesktopView from '../components/header/DesktopView'
import '../styles/globals.css'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <DesktopView/>
            <Component {...pageProps} />
        </>
    )
}
