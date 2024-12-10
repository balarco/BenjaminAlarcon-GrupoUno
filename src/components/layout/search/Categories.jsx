// src/components/layout/search/Categories.jsx

"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../data/asyncMock';

const Categories = React.memo(({ currentCategory, closeMobileMenu }) => { // Receive closeMobileMenu
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const allProducts = await getProducts();
                const uniqueCategories = new Set(allProducts.map(product => product.category));
                setCategories(["All", ...uniqueCategories]);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchAllCategories();
    }, []);

    return (
        <aside className="w-1/4 pr-8">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category} className="mb-2">
                        <Link href={category === 'All' ? '/search' : `/search/${category}`}>
                            {/* Close menu on click */}
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