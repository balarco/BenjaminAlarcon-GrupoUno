// src/app/layout.jsx

import HeaderWrapper from '../components/layout/header/HeaderWrapper';
import Footer from '../components/layout/Footer';
import './globals.css'; // Import your global styles here (if you have them)

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