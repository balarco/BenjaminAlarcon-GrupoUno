// src/components/product/Product.jsx

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProductById } from '../../data/asyncMock';

const ProductItem = ({ id, height }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    const truncateDescription = (description, limit) => {
        if (description.length > limit) {
            const truncated = description.substring(0, limit);
            return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
        }
        return description;
    };

    // Function to format the price with dots as thousands separators
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="group relative bg-gray-600 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer border-white border-2">
            <Link href={`/products/${id}`}>
                <div className="">
                    <Image
                        src={product.img}
                        alt={product.alt}
                        width={500}
                        height={height}
                        className="w-full rounded-xl object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-gradient-to-t from-gray-900 to-transparent p-4 rounded-b-2xl">
                        <h2 className="text-base text-white">{product.title}</h2>
                        <p className="text-sm text-white">{truncateDescription(product.description, 50)}</p>
                        <h3 className="text-left text-white">$ {formatPrice(product.price)}</h3> {/* Format price here */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;