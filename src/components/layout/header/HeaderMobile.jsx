"use client";

import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import { useStore } from '../../../store/store.js';
import Image from 'next/image';
import CartSidebar from '../cart/Cart';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Search from './Search.jsx';
import Categories from '../search/Categories.jsx';

const HeaderMobile = () => {
    const cartItems = useStore((state) => state.cart);
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <header className="py-4 px-6 bg-gray-900 text-gray-300 shadow-md z-50 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="block flex-none md:hidden">
                    <button
                        onClick={openMobileMenu}
                        aria-label="Open mobile menu"
                        className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors md:hidden"
                    >
                        <Bars3Icon className="h-4 stroke-white" />
                    </button>
                    <Transition show={isOpen}>
                        <Dialog onClose={closeMobileMenu} className="relative z-50">
                            <Transition.Child
                                as={Fragment}
                                enter="transition-all ease-in-out duration-300"
                                enterFrom="opacity-0 backdrop-blur-none"
                                enterTo="opacity-100 backdrop-blur-[.5px]"
                                leave="transition-all ease-in-out duration-200"
                                leaveFrom="opacity-100 backdrop-blur-[.5px]"
                                leaveTo="opacity-0 backdrop-blur-none"
                            >
                                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-all ease-in-out duration-300"
                                enterFrom="translate-x-[-100%]"
                                enterTo="translate-x-0"
                                leave="transition-all ease-in-out duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-[-100%]"
                            >
                                <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-gray-900 text-white pb-6">
                                    <div className="p-4">
                                        <button
                                            className="mb-4 flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors"
                                            onClick={closeMobileMenu}
                                            aria-label="Close mobile menu"
                                        >
                                            <XMarkIcon className="h-6" />
                                        </button>

                                        <div className="mb-4 w-full">
                                            <Search />
                                        </div>
                                        <Categories currentCategory={""} closeMobileMenu={closeMobileMenu} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </Dialog>
                    </Transition>
                </div>

                <div className="flex w-full items-center">
                    <div className="flex w-full md:w-1/3">
                        <Link
                            href="/"
                            prefetch={true}
                            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
                        >
                            <div className="cursor-pointer">
                                <Image
                                    src="/images/mockLogo.png"
                                    alt="Widun Logo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-end md:w-1/3">
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
                    <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
                </div>
            </div>
        </header>
    );
};

export default HeaderMobile;