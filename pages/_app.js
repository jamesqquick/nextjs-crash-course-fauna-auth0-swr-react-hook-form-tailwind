import Navbar from '../components/Navbar';
import '../styles/app.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-red-600 w-full p-10 min-h-screen">
            <Navbar />
            <div className="max-w-2xl mx-auto">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
