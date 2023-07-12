import { getStock } from "../firebase/firebaseConfig"
import { useState, useEffect, createContext } from "react"

export const StockContext = createContext()

export const StockProvider = ({ children }) => {
    const [stock, setStock] = useState(null)
    const filtObj = {
        precioMax: 40000,
        precioMin: 20000,
        marca: "Nike",
    }
    useEffect(() => {
        getStock()
            .then(products => {
                setStock(products);
            })
            .catch(error => {
                console.error("Error al obtener el stock:", error);
            });
    }, []);

    return (
        <StockContext.Provider value={stock}> {children} </StockContext.Provider>
    )
}

