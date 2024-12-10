"use client";

import { useState, useEffect, useMemo } from "react";
import { getProducts, getProductByCategory } from "../../../data/asyncMock";
import { useParams } from "next/navigation";
import ProductGrid from "../../../components/layout/search/ProductGrid";
import Categories from "../../../components/layout/search/Categories";
import MobileCategories from "../../../components/layout/search/MobileCategories";
import { notFound } from "next/navigation";

const SearchCategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [isValidCategory, setIsValidCategory] = useState(true);
    const { category } = useParams();
    const [isMobile, setIsMobile] = useState(false);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setAllProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching all products:", error);
            }
        };

        fetchAllProducts();
    }, []);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                // Check for valid category only AFTER allProducts is fetched
                if (
                    allProducts.length > 0 &&
                    !allProducts.some((p) => p.category === category)
                ) {
                    setIsValidCategory(false);
                    return;
                }

                const filteredProducts = await getProductByCategory(category);
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products by category:", error);
            }
        };

        fetchProductsByCategory();
    }, [category, allProducts]);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(allProducts.map((product) => product.category));
        return ["All", ...uniqueCategories];
    }, [allProducts]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint if needed
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isValidCategory) {
        return notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container mx-auto mt-10 flex flex-grow">
                {isMobile ? (
                    <div className="w-full">
                        <MobileCategories currentCategory={category} />
                        <ProductGrid products={products} />
                    </div>
                ) : (
                    <>
                        <Categories categories={categories} currentCategory={category} />
                        <div className="w-3/4">
                            <ProductGrid products={products} />
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default SearchCategoryPage;