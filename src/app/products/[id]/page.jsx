// src/app/products/[id]/page.jsx

import { getProductById, getProducts } from '../../../data/asyncMock';
import ProductDetail from '../../../components/product/ProductDetail';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const getFourRandomProducts = async (excludeId) => {
    const allProducts = await getProducts();
    const filteredProducts = allProducts.filter(p => p.id !== parseInt(excludeId));
    const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 4);
};

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default async function ProductDetailsPage({ params }) {
    const product = await getProductById(params.id);
    const randomProducts = await getFourRandomProducts(params.id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="container mx-auto mt-10 px-4">
            <div>
                <ProductDetail product={product} />
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Otros Productos</h2>
                <div className="flex flex-wrap justify-center">
                    {randomProducts.map((randomProduct) => (
                        <div key={randomProduct.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                            <Link href={`/products/${randomProduct.id}`}>
                                <div className="group relative bg-gray-600 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer border-white border-2">
                                    <Image
                                        src={randomProduct.img}
                                        alt={randomProduct.alt}
                                        width={500}
                                        height={250}
                                        className="w-full rounded-xl object-cover"
                                        style={{ height: 250 }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-gradient-to-t from-gray-900 to-transparent p-4 rounded-b-2xl">
                                        <h2 className="text-base text-white">{randomProduct.title}</h2>
                                        <h3 className="text-left text-white">$ {formatPrice(randomProduct.price)}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}