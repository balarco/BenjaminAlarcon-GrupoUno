"use client";

import BannerProduct from '../components/product/BannerProduct';
import { getProducts } from '../data/asyncMock';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    const [mainProductId, setMainProductId] = useState(null);
    const [sideProductIds, setSideProductIds] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductIds = async () => {
            try {
                const allProducts = await getProducts();
                setProducts(allProducts);

                const mainIndex = Math.floor(Math.random() * allProducts.length);
                setMainProductId(allProducts[mainIndex].id);

                let sideIndices = [];
                while (sideIndices.length < 4) {
                    const randomIndex = Math.floor(Math.random() * allProducts.length);
                    if (randomIndex !== mainIndex && !sideIndices.includes(randomIndex)) {
                        sideIndices.push(randomIndex);
                    }
                }
                setSideProductIds(sideIndices.map(index => allProducts[index].id));
            } catch (error) {
                console.error('Error fetching product IDs:', error);
            }
        };

        fetchProductIds();
    }, []);

    if (!mainProductId || sideProductIds.length < 4) {
        return <div>Loading...</div>;
    }

    const mainProduct = products.find(p => p.id === mainProductId);
    const sideProducts = sideProductIds.map(id => products.find(p => p.id === id));

    const bannerHeight = 450;
    const sideProductHeight = 250;

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="w-full px-4 mb-8" >
                <BannerProduct id={mainProductId} height={bannerHeight} />
            </div>

            <div className="flex flex-wrap justify-center">
                {sideProducts.map((product) => (
                    <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <Link href={`/products/${product.id}`}>
                            <div className="group relative bg-gray-600 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer border-white border-2">
                                <Image
                                    src={product.img}
                                    alt={product.alt}
                                    width={500}
                                    height={sideProductHeight}
                                    className="w-full rounded-xl object-cover"
                                    style={{ height: sideProductHeight }}
                                />
                                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-gradient-to-t from-gray-900 to-transparent p-4 rounded-b-2xl">
                                    <h2 className="text-base text-white">{product.title}</h2>
                                    <h3 className="text-left text-white">$ {formatPrice(product.price)}</h3> {/* Format price here */}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Home;