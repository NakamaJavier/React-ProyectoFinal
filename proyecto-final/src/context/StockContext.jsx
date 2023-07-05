import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { useState, useEffect, createContext } from "react"

export const StockContext = createContext()

export const StockProvider = ({ children }) => {
    const [stock, setStock] = useState(null)

    useEffect(() => {
        const getStock = async () => {
            const q = query(collection(db, "shoes"))
            const querySnapshot = await getDocs(q)
            let data
            querySnapshot.forEach((doc) => {
                data = doc.data()
            })
            setStock(data.items)
        }
        getStock()
    }, [])
    return (
        <StockContext.Provider value={stock}> {children} </StockContext.Provider>
    )
}

