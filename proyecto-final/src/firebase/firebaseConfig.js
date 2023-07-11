import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc,collection,addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_FB_API_KEY,
    authDomain: import.meta.env.VITE_API_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_API__PROJECTID,
    storageBucket: import.meta.env.VITE_API__STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_API__MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_API__APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



const cargarDatos = async (jsonData) => {
    try {
        const shoesCollectionRef = collection(db, "shoes");
        for (const item of jsonData) {
            const docRef = await addDoc(shoesCollectionRef, item);
            console.log("Documento agregado con ID:", docRef.id);
        }
        console.log("Datos cargados correctamente en Firebase");
    } catch (error) {
        console.error("Error al cargar los datos en Firebase:", error);
    }
};

export default cargarDatos;