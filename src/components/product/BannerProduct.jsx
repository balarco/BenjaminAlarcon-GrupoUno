// src/components/product/BannerProduct.jsx

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProductById } from '../../data/asyncMock';

const BannerProduct = ({ id }) => {
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

    // Function to format the price with dots as thousands separators
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <Link href={`/products/${id}`}>
            <div className="flex rounded-2xl overflow-hidden border-white border-2 cursor-pointer">
                <div className="w-1/2 md:w-1/3"> {/* Adjust image width on larger screens */}
                    <Image
                        src={product.img}
                        alt={product.alt}
                        width={500}
                        height={300} // Fixed height
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 md:w-2/3 p-6 bg-gray-600 flex flex-col justify-center text-white"> {/* Adjust text width */}
                    <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                    <p className="text-base mb-6">{product.description}</p>
                    <div className="bg-blue-950 text-white p-3 rounded-xl text-lg font-semibold">
                        $ {formatPrice(product.price)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BannerProduct;