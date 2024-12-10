"use client";

import { useState, useEffect } from 'react';
import Header from './Header';
import HeaderMobile from './HeaderMobile';

const HeaderWrapper = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        if (typeof window !== 'undefined'){
            handleResize();
            window.addEventListener('resize', handleResize);
        }
        return () => {
            if (typeof window !== 'undefined'){
                window.removeEventListener('resize', handleResize);
            }
        }
    }, []);

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
        </>
    );
};

export default HeaderWrapper;