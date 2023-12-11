
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARLoQuHnEX5jYkTg0g0pgC4iSKAsFULzY",
  authDomain: "cookbook-25975.firebaseapp.com",
  projectId: "cookbook-25975",
  storageBucket: "cookbook-25975.appspot.com",
  messagingSenderId: "927835319272",
  appId: "1:927835319272:web:ff31d9da63a910905c125d",
  measurementId: "G-S1QLTVHGMM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};