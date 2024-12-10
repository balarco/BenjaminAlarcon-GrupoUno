"use client";

import { useState, useEffect } from "react";
import Product from "../../product/Product";
import React from 'react';

const ProductGrid = React.memo(({ products }) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const getColumnCount = () => {
        if (windowWidth >= 1024) {
            return 3; // 3 columns for large screens (lg breakpoint and above)
        } else if (windowWidth >= 768) {
            return 2; // 2 columns for medium screens (md breakpoint)
        } else {
            return 1; // 1 column for small screens
        }
    };

    const distributeProducts = (products) => {
        const numColumns = getColumnCount();
        const columns = Array.from({ length: numColumns }, () => []);

        products.forEach((product, index) => {
            columns[index % numColumns].push(product);
        });

        return columns;
    };

    const columnedProducts = distributeProducts(products);

    return (
        <div
            className="grid gap-4"
            style={{
                gridTemplateColumns: `repeat(${getColumnCount()}, minmax(0, 1fr))`,
            }}
        >
            {columnedProducts.map((column, columnIndex) => (
                <div key={`column-${columnIndex}`} className="flex flex-col gap-4">
                    {column.map((product) => (
                        <div key={product.id} className="break-inside-avoid mb-4">
                            <Product id={product.id} height={250} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
});

export default ProductGrid;