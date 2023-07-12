import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,getDocs, query, where } from "firebase/firestore";

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
            const docRef = await addDoc(shoesCollectionRef, item);
            //console.log("Documento agregado con ID:", docRef.id);
        }
        console.log("Datos cargados correctamente en Firebase");
    } catch (error) {
        console.error("Error al cargar los datos en Firebase:", error);
    }
};

export const getStock = async (varFilter=null) => {
    let q = null
    if(!varFilter){
        q = collection(db, "shoes");
    }
    else{
        q = query(collection(db, "shoes"), where("marca", "==", varFilter.marca), where("precio", "<=", varFilter.precioMax),where("precio", ">=", varFilter.precioMin));
    }
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        if(doc.id!="productos")
        data.push(doc.data());
    });
    return data;
};
