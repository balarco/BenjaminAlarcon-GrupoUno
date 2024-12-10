// src/components/layout/search/MobileCategories.jsx

"use client";

import { useState, useEffect, useRef } from "react"; // Import useRef
import { getProducts } from "../../../data/asyncMock";
import Link from "next/link";

const MobileCategories = ({ currentCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const products = await getProducts();
                const uniqueCategories = new Set(products.map((p) => p.category));
                setCategories(["All", ...uniqueCategories]);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Only add listener when the dropdown is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]); // Dependency array includes isOpen

    return (
        <div ref={dropdownRef} className="relative w-full mb-4"> {/* Attach ref to div */}
            <button
                className="w-full bg-gray-800 text-white p-2 rounded-md flex items-center justify-between"
                onClick={toggleDropdown}
            >
                {currentCategory || "Select Category"}
                <svg
                    className={`w-4 h-4 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute w-full bg-gray-800 text-white mt-1 rounded-md shadow-lg z-10">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link href={category === "All" ? "/search" : `/search/${category}`}>
                                <div
                                    className={`block px-4 py-2 hover:bg-gray-700 ${
                                        category === currentCategory ? "bg-gray-700" : ""
                                    }`}
                                >
                                    {category}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MobileCategories;