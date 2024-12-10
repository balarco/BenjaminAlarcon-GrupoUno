// src/components/layout/CartItem.jsx

import { useStore } from '../../store/store';
import Image from 'next/image';
import Link from 'next/link';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const CartItem = ({ item, onClose }) => {
    const { deleteProduct, updateProduct } = useStore();

    const handleRemoveItem = () => {
        deleteProduct(item.id, item.selectedType);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity <= 0) {
            handleRemoveItem();
        } else {
            updateProduct(item.id, newQuantity, item.selectedType);
        }
    };

    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    return (
        <div className="flex items-center py-4 border-b border-gray-700">
            <div className="w-16 h-16 mr-4 relative">
                <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <div className="flex-grow">
                <Link href={`/products/${item.id}`}>
                    <div className="text-lg font-semibold cursor-pointer" onClick={onClose}>
                        {item.title}
                    </div>
                </Link>
                <p className="text-gray-400">{item.selectedType || 'Default'}</p>
                <div className="flex items-center mt-2">
                    <button
                        onClick={() => handleQuantityChange(item.quantity - 1)}
                        className="bg-gray-800 text-white p-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        <MinusIcon className="h-5 w-5" /> {/* Use MinusIcon */}
                    </button>
                    {/* Fixed width for amount picker */}
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item.quantity + 1)}
                        className="bg-gray-800 text-white p-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        <PlusIcon className="h-5 w-5" /> {/* Use PlusIcon */}
                    </button>
                    <span className="ml-4 text-lg font-semibold">
            ${formatPrice(item.price * item.quantity)}
          </span>
                </div>
            </div>
            <button
                onClick={handleRemoveItem}
                className="text-gray-400 hover:text-white focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

export default CartItem;