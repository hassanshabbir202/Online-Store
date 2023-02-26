import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5etMZEoF8w1LQEoqi9dX9Hhss-ca_rYY",
  authDomain: "online-store-6748b.firebaseapp.com",
  projectId: "online-store-6748b",
  storageBucket: "online-store-6748b.appspot.com",
  messagingSenderId: "655025840282",
  appId: "1:655025840282:web:56dd19cb590b386c7a3f23",
  measurementId: "G-TS75GVK1FT",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app










