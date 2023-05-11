// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACZ9a3tnsB-5x_ASOmWEjKUGJEBDAMagI",
    authDomain: "resume-builder-e2930.firebaseapp.com",
    projectId: "resume-builder-e2930",
    storageBucket: "resume-builder-e2930.appspot.com",
    messagingSenderId: "1045595913637",
    appId: "1:1045595913637:web:9dbcba95cee8625ff83c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;