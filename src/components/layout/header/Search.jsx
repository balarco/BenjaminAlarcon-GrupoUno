// src/components/layout/header/Search.jsx

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            router.push(`/search?q=${searchTerm}`);
        } else {
            router.push('/search');
        }
    };

    return (
        <div className="flex-grow max-w-md mx-10">
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
        </div>
    );
};

export default Search;