// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlm835py1uXSkseFqFD_XH70KscnR0zUM",
    authDomain: "appchat-cuoiki.firebaseapp.com",
    projectId: "appchat-cuoiki",
    storageBucket: "appchat-cuoiki.appspot.com",
    messagingSenderId: "793139804742",
    appId: "1:793139804742:web:9bbe467b62927320996847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);