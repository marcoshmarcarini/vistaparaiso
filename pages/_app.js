import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/mobile.css'

    // This default export is required in a new `pages/_app.js` file.
    export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
    }