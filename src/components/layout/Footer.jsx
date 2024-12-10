"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-12">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image
                                src="/images/mockLogo.png"
                                alt="Widun Logo"
                                width={30}
                                height={30}
                            />
                            <h2 className="text-lg font-bold ml-2 text-white">Widun</h2>
                        </div>
                    </Link>
                </div>

                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <ul className="list-none">
                        <li>
                            <Link href="/">
                                <div className="hover:text-white hover:underline cursor-pointer">Pagina Principal</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <div className="hover:text-white hover:underline cursor-pointer">Acerca De</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions">
                                <div className="hover:text-white hover:underline cursor-pointer">Terminos y Condiciones</div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <ul className="list-none">
                        <li>
                            <Link href="/contact">
                                <div className="hover:text-white hover:underline cursor-pointer">Contacto</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-artisans">
                                <div className="hover:text-white hover:underline cursor-pointer">Nuestros Artesanos</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shipping-return-policy">
                                <div className="hover:text-white hover:underline cursor-pointer">Envio y Retornos</div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <ul className="list-none">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white hover:underline cursor-pointer"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white hover:underline cursor-pointer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white hover:underline cursor-pointer"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;