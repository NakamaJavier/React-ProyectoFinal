import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_FB_API_KEY,
    authDomain: import.meta.env.VITE_API_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_API__PROJECTID,
    storageBucket: import.meta.env.VITE_API__STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_API__MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_API__APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const rebootStock = async (jsonData) => {
    try {
        const shoesCollectionRef = collection(db, "shoes");
        for (const item of jsonData) {
            await setDoc(doc(shoesCollectionRef, item.id.toString()), item);
        }
        console.log("Datos cargados correctamente en Firebase");
    } catch (error) {
        console.error("Error al cargar los datos en Firebase:", error);
    }
};

export const getStock = async (varFilter = null) => {
    let q = null
    const verifyFilter = !varFilter ||
        !varFilter.marca ||
        varFilter.marca.length === 0 ||
        varFilter.precioMax === undefined ||
        varFilter.precioMin === undefined;
    q = collection(db, "shoes");

    if (varFilter.marca && varFilter.marca.length > 0) {
        q = query(q, where("marca", "in", varFilter.marca));
    }

    if (varFilter.precioMin && varFilter.precioMax) {
        q = query(
            q,
            where("precio", "<=", varFilter.precioMax),
            where("precio", ">=", varFilter.precioMin)
        );
    }
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        const itemData = doc.data()
        if (varFilter.talle?.length > 0) {
            const filteredStock = itemData.stock.filter((item) =>
                varFilter?.talle?.includes(item.talle))
            filteredStock.length > 0 && data.push(itemData)
        } else
            data.push(itemData)
    });
    return data;
};
