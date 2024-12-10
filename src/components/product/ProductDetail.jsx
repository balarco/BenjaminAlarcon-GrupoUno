"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useStore } from '../../store/store';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const ProductDetail = ({ product }) => {
    const hasMultipleTypes = product.types.length > 1;

    const [selectedType, setSelectedType] = useState(hasMultipleTypes ? product.types[0] : null);
    const [amount, setAmount] = useState(1);
    const { addProduct, cart, updateProduct } = useStore();

    const handleTypeChange = (type) => {
        setSelectedType(type);
        setAmount(1);
    };

    const getStockForSelectedType = () => {
        if (!product.stock) {
            return 0;
        }
        if (!hasMultipleTypes) {
            return product.stock[0].quantity;
        }
        const stockItem = product.stock.find(item => item.type === selectedType);
        return stockItem ? stockItem.quantity : 0;
    };

    const handleAmountChange = (change) => {
        setAmount(prevAmount => {
            const newAmount = prevAmount + change;
            const availableStock = getStockForSelectedType();
            return Math.max(1, Math.min(newAmount, availableStock));
        });
    };

    const handleAddToCart = () => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id && item.selectedType === selectedType);
        const availableStock = getStockForSelectedType();

        if (existingProductIndex !== -1) {
            const newQuantity = Math.min(cart[existingProductIndex].quantity + amount, availableStock);
            updateProduct(product.id, newQuantity, selectedType);
        } else {
            addProduct({
                ...product,
                quantity: amount,
                selectedType: selectedType,
                stock: product.stock
            });
        }
    };

    const isAddToCartDisabled = hasMultipleTypes && !selectedType || amount > getStockForSelectedType();
    const isProductInCart = cart.some(item => item.id === product.id && (item.selectedType === selectedType || (!item.selectedType && !selectedType)));

    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    return (
        <div className="border-2 border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                        src={product.img}
                        alt={product.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain max-h-[600px] rounded-2xl"
                    />
                </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center md:items-start">
                <h1 className="text-3xl font-bold mb-4 text-center md:text-left">{product.title}</h1>
                <p className="text-2xl mb-6 text-center md:text-left">${formatPrice(product.price)}</p>
                <p className="mb-6 text-center md:text-left">{product.description}</p>

                {hasMultipleTypes && (
                    <div className="mb-6 w-full">
                        <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Tipos:</h2>
                        <div className="flex justify-center md:justify-start">
                            {product.types.map(type => (
                                <button
                                    key={type}
                                    className={`bg-gray-800 outline outline-1 outline-gray-400 px-4 py-2 rounded-lg mr-2 ${selectedType === type ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => handleTypeChange(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mb-6 w-full">
                    <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Cantidad:</h2>
                    <div className="flex items-center justify-center md:justify-start">
                        <button className="bg-gray-800 hover:outline-white outline outline-1 outline-gray-400 p-2 rounded-lg" onClick={() => handleAmountChange(-1)} disabled={amount <= 1}>
                            <MinusIcon className="h-5 w-5 text-white" />
                        </button>
                        <span className="mx-4 text-lg">{amount}</span>
                        <button className="bg-gray-800 hover:outline-white outline outline-1 outline-gray-400 p-2 rounded-lg" onClick={() => handleAmountChange(1)} disabled={amount >= getStockForSelectedType()}>
                            <PlusIcon className="h-5 w-5 text-white" />
                        </button>
                        <span className="ml-4 text-gray-500">({getStockForSelectedType()} disponibles)</span>
                    </div>
                </div>

                <button
                    className={`bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ${isAddToCartDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleAddToCart}
                    disabled={isAddToCartDisabled}
                >
                    {isProductInCart ? 'En el Carrito' : 'Añadir al Carrito'}
                </button>

            </div>
        </div>
    );
};

export default ProductDetail;