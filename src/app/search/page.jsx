"use client";

import { useState, useEffect } from "react";
import { getProducts } from "../../data/asyncMock";
import { useSearchParams } from "next/navigation";
import ProductGrid from "../../components/layout/search/ProductGrid";
import Categories from "../../components/layout/search/Categories";

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("q") || "";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let allProducts = await getProducts();

                if (searchTerm) {
                    allProducts = allProducts.filter((product) =>
                        product.title.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }

                setProducts(allProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="container mx-auto mt-10 flex flex-grow">
                <Categories currentCategory={"All"} />
                <div className="w-3/4">
                    <ProductGrid products={products} />
                </div>
            </main>
        </div>
    );
};

export default SearchPage;