import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "minimap-hero.firebaseapp.com",
  databaseURL: "https://minimap-hero-default-rtdb.firebaseio.com",
  projectId: "minimap-hero",
  storageBucket: "minimap-hero.appspot.com",
  messagingSenderId: "1077020226068",
  appId: "1:1077020226068:web:fa5be9871f45fa6e426d01",
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
