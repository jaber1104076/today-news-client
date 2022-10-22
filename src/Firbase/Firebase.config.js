// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeCCJher97RVYTeuZNKci6NbfbeVETDOg",
    authDomain: "daily-news-c9ac7.firebaseapp.com",
    projectId: "daily-news-c9ac7",
    storageBucket: "daily-news-c9ac7.appspot.com",
    messagingSenderId: "865386021507",
    appId: "1:865386021507:web:0152df55098d9b385151b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;