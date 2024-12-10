// src/store/store.js

import { create } from 'zustand';

export const useStore = create((set) => ({
    cart: [],
    addProduct: (product) => set((state) => {
        const existingProductIndex = state.cart.findIndex(
            (item) => item.id === product.id && item.selectedType === product.selectedType
        );

        if (existingProductIndex !== -1) {
            // Product already exists, update its quantity
            const updatedCart = state.cart.map((item, index) => {
                if (index === existingProductIndex) {
                    const stockItem = product.stock.find(stock => stock.type === product.selectedType) || product.stock[0];
                    const newQuantity = Math.min(item.quantity + product.quantity, stockItem.quantity);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            return { cart: updatedCart };
        } else {
            // Product is new, add it to the cart
            return { cart: [...state.cart, product] };
        }
    }),
    removeProduct: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
    })),
    deleteProduct: (productId, productType) => set((state) => ({
        cart: state.cart.filter(item => !(item.id === productId && item.selectedType === productType)),
    })),
    eraseAllProducts: () => set({ cart: [] }),
    updateProduct: (productId, newQuantity, productType) => set((state) => ({
        cart: state.cart.map((item) => {
            if (item.id === productId && item.selectedType === productType) {
                // Find the correct stock item based on productType
                const stockItem = item.stock.find(stock => stock.type === productType);
                const availableStock = stockItem ? stockItem.quantity : item.stock[0].quantity;
                return { ...item, quantity: Math.min(newQuantity, availableStock) };
            }
            return item;
        }),
    })),
    setCart: (newCart) => set({ cart: newCart }),
}));