import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import {
    setDoc,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxTIdXRfXDybuXxhquYjdQ8BRa1SqyaMM",
    authDomain: "social-network-app-7c3a3.firebaseapp.com",
    projectId: "social-network-app-7c3a3",
    storageBucket: "social-network-app-7c3a3.appspot.com",
    messagingSenderId: "91410033495",
    appId: "1:91410033495:web:60d293e50eb7c8596a6c12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// GoogleLogin
const providerGoogle = new GoogleAuthProvider(app);
// Esportando firebase auth
export {
    auth,
    app,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    providerGoogle,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
}

export {
    setDoc,
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
}