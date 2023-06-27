
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,setDoc,doc} from "firebase/firestore";

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



const cargarDatos = async (items)=> {
    const docRef = await setDoc(doc(db,"shoes","productos"),{
        items
    })
}

export default cargarDatos;