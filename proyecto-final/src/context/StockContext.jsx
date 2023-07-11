import { collection, query, where, getDocs, getDoc,doc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useState, useEffect, createContext } from "react"

export const StockContext = createContext()

export const StockProvider = ({ children }) => {
    const [stock, setStock] = useState(null)

    useEffect(() => {
        const getStock = async () => {
            const q = doc(db, "shoes", "productos")
            const docSnap = await getDoc(q)
            if (docSnap.exists()) {
                const data = docSnap.data();
                setStock(data.items);
            }
        }
        getStock()
    }, [])
    return (
        <StockContext.Provider value={stock}> {children} </StockContext.Provider>
    )
}

