import firebase from 'firebase/app'
import {getApps, apps, initializeApp} from 'firebase/app'
import'firebase/auth'
import'firebase/firestore'
import'firebase/storage'
import'firebase/analytics'


const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
    
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

export { initFirebase, db };