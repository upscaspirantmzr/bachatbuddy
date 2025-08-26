// firebaseConfig.js
// Replace the placeholder values with your Firebase project's web app config
// Copy this file into each page's folder and import `auth` and `db` where needed.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js';

 const firebaseConfig = {
    apiKey: "AIzaSyDFsQoibNmpe2BEcmD9IOA4DqdcG4Yoi40",
    authDomain: "truck-59174.firebaseapp.com",
    projectId: "truck-59174",
    storageBucket: "truck-59174.firebasestorage.app",
    messagingSenderId: "953695746094",
    appId: "1:953695746094:web:4407939995c3a42f1d47bf",
    measurementId: "G-S1QEX48YKS"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Notes:
// - Replace the placeholder strings with values from Firebase Console → Project settings → SDK setup.
// - Keep this file private in your repo (use environment variables or GitHub Secrets for production deployments).
// - For local testing, you can keep this file in the repo but rotate keys and secure rules before releasing.
