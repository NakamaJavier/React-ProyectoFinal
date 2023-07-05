import { useState, createContext } from "react"


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };
    const clearCart = () => {
        setCartItems([]);
    };
    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
        }}> {children}
        </CartContext.Provider>
    )
}