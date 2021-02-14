import 'bootstrap/dist/css/bootstrap.css';

export default function AppWrapper ({ Component, pageProps }) {
    return <Component {...pageProps} />
}