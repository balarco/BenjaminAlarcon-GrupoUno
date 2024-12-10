"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStore } from '../../../store/store.js';
import Image from 'next/image';
import CartSidebar from '../cart/Cart';
import Search from './Search.jsx';

const Header = () => {
    const cartItems = useStore((state) => state.cart);
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        if (typeof window !== 'undefined'){
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const hideTitleBreakpoint = 768;

    return (
        <header className="py-4 px-6 bg-gray-900 text-gray-300 shadow-md sticky z-50 w-full">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Title Container */}
                <div className="flex items-center">
                    <Link href="/">
                        <div className="cursor-pointer">
                            <Image
                                src="/images/mockLogo.png"
                                alt="Widun Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                    </Link>
                    {windowWidth >= hideTitleBreakpoint && (
                        <Link href="/">
                            <div className="cursor-pointer">
                                <h1 className="text-2xl font-bold ml-4 text-white">Widun</h1>
                            </div>
                        </Link>
                    )}

                    {/* Navigation Items */}
                    <nav className="ml-6">
                        <ul className="hidden gap-6 text-sm md:flex md:items-center">
                            <li>
                                <Link href="/search">
                                    <div className="hover:text-white hover:underline cursor-pointer">Todo</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/search/Vasijas">
                                    <div className="hover:text-white hover:underline cursor-pointer">Vasijas</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/search/Pinturas">
                                    <div className="hover:text-white hover:underline cursor-pointer">Pinturas</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Search />

                <div className="flex justify-end items-center">
                    <div className="relative cursor-pointer" onClick={toggleCart}
                         onMouseEnter={() => setIsCartHovered(true)}
                         onMouseLeave={() => setIsCartHovered(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transition-transform stroke-gray-300 ${isCartHovered ? 'scale-110' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {cartQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {cartQuantity}
                        </span>
                        )}
                    </div>
                </div>
                <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
            </div>
        </header>

    );
};

export default Header;