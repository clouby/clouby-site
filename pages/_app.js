import ThemeProvider from "./../context/theme";
import Header from "./../components/header";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <ThemeProvider>
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}
