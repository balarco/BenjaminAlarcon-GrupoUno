"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../data/asyncMock';

const Categories = React.memo(({ currentCategory, closeMobileMenu }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const allProducts = await getProducts();
                const uniqueCategories = new Set(allProducts.map(product => product.category));
                setCategories(["Todo", ...uniqueCategories]);
            } catch (error) {
                console.error("Error al buscar categorías:", error);
            }
        };

        fetchAllCategories();
    }, []);

    return (
        <aside className="w-1/4 pr-8">
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category} className="mb-2">
                        <Link href={category === 'Todo' ? '/search' : `/search/${category}`}>
                            <div
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-500 hover:underline cursor-pointer ${currentCategory === category ? 'text-amber-500' : ''}`}
                            >
                                {category}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
});

export default Categories;