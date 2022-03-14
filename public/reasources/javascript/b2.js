const artImg = document.getElementById('artImg')
artImg.addEventListener('click,',function () {
    console.log('lol')
    
        window.open("/Users/ryandevine/github/final/public/CreativeM/art.html")
})

function artClick() {
    window.open("/Users/ryandevine/github/final/public/CreativeM/art.html")
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyx85MkuFCh7Ll6E0yNhnrtRD--cwlAE",
  authDomain: "final-b2.firebaseapp.com",
  databaseURL: "https://final-b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-b2",
  storageBucket: "final-b2.appspot.com",
  messagingSenderId: "421893644224",
  appId: "1:421893644224:web:94c9ebb31534fe1c02f225",
  measurementId: "G-3DG9YK92S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

