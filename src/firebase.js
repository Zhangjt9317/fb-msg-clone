import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB26jQ7iHUWGWny4zxhHaI_8DHXcmJCulQ",
    authDomain: "fb-msger.firebaseapp.com",
    projectId: "fb-msger",
    storageBucket: "fb-msger.appspot.com",
    messagingSenderId: "787219964350",
    appId: "1:787219964350:web:60e225f63e17c33e4599ef",
    measurementId: "G-Q4XSJ5CZGM"
});

const db = firebaseApp.firestore();

export { db };