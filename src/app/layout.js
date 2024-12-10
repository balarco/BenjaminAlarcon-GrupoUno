import HeaderWrapper from '../components/layout/header/HeaderWrapper';
import Footer from '../components/layout/Footer';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <HeaderWrapper />
        {children}
        <Footer />
        </body>
        </html>
    );
}