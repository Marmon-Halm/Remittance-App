import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHi2pfEz9JhU6goNLMRcyAq7baUMiiz5I",
  authDomain: "transporttruck-5292e.firebaseapp.com",
  projectId: "transporttruck-5292e",
  storageBucket: "transporttruck-5292e.appspot.com",
  messagingSenderId: "1009485053498",
  appId: "1:1009485053498:web:e79191b26209d10b457f03",
  measurementId: "G-MYB4G4LX5F"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore()
  
  export default app;

  // export const db = getFirestore() 