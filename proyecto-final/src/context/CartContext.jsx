import { useState,useEffect, createContext } from "react"
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems([...cartItems, product])
    }

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    }

    const clearCart = () => {
        setCartItems([]);
    }

    useEffect(() => {
        // Cargar los datos desde el almacenamiento local al estado
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        // Guardar los datos en el almacenamiento local cuando cambie el estado
        if(cartItems.length>0)
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            clearCart,
        }}> {children}
        </CartContext.Provider>
    )
}