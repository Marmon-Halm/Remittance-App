import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcLSedGkajDPIAMMXNQ7hEtjha-KcVRXw",
  authDomain: "nametruck-4b5f3.firebaseapp.com",
  projectId: "nametruck-4b5f3",
  storageBucket: "nametruck-4b5f3.appspot.com",
  messagingSenderId: "349572616851",
  appId: "1:349572616851:web:e7ad2653b2c2531ded7366",
  measurementId: "G-3W1905W0TN"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore()
  
  export default app;

  // export const db = getFirestore() 