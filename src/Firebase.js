import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxHryTbfXsOmk-A54SSxd9Q6suH1Klcks",
  authDomain: "minimap-hero.firebaseapp.com",
  databaseURL: "https://minimap-hero-default-rtdb.firebaseio.com",
  projectId: "minimap-hero",
  storageBucket: "minimap-hero.appspot.com",
  messagingSenderId: "1077020226068",
  appId: "1:1077020226068:web:fa5be9871f45fa6e426d01",
};

const app = initializeApp(firebaseConfig);

// Export the Firebase app instance
export default app;
