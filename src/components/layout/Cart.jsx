// src/components/layout/Cart.jsx

"use client";

import { useStore } from '../../store/store';
import { useState, useEffect, useRef } from 'react';
import { getProductById } from '../../data/asyncMock';
import CartItem from './CartItem';

const CartSidebar = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const { cart, updateProduct, deleteProduct, eraseAllProducts, setCart } = useStore();
    const cartRef = useRef(null);

    const recalculateTotal = () => {
        const newTotal = cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        setCartTotal(newTotal);
    };

    const clearCart = () => {
        eraseAllProducts();
        setCartTotal(0);
        setCartItems([]);
    };

    const updateCart = async () => {
        const updatedCart = await Promise.all(
            cart.map(async (item) => {
                const newProduct = await getProductById(item.id);

                // Find the correct stock based on selectedType
                const stockItem = newProduct.stock.find(stock => stock.type === item.selectedType) || newProduct.stock[0];
                const availableStock = stockItem.quantity;

                // Update quantity, ensuring it doesn't exceed the available stock
                const updatedQuantity = Math.min(item.quantity, availableStock);

                return {
                    ...item,
                    stock: newProduct.stock, // Update the entire stock array
                    quantity: updatedQuantity
                };
            })
        );

        setCart(updatedCart);
    };

    useEffect(() => {
        setCartItems(cart);
        recalculateTotal();
    }, [cart]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target) && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-gray-900 text-white w-full md:w-1/3 p-6 max-w-[100%] overflow-y-auto shadow-lg transform translate-x-0 transition-transform duration-300 flex flex-col h-full" ref={cartRef}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">My Cart</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul className="flex-grow overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-gray-400">Your cart is empty.</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <li key={`${item.id}-${item.selectedType || 'default'}`}>
                                <CartItem item={item} onClose={onClose}/>
                            </li>
                        ))
                    )}
                </ul>

                {cartItems.length > 0 && (
                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <button onClick={clearCart} className="text-gray-400 hover:text-white focus:outline-none">Clear</button>
                            <button onClick={updateCart} className="text-gray-400 hover:text-white focus:outline-none">Refresh</button>
                        </div>

                        <div className="mt-4 border-t border-gray-700 pt-4">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-lg">Total:</p>
                                <p className="text-xl font-bold">${formatPrice(cartTotal)}</p> {/* Formatted price */}
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;