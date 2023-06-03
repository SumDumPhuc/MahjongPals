// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyCCwoBdQr9CbVFUt4x-Nvz7EIvaJgAiH0A",
    authDomain: "mahjongpals-30f80.firebaseapp.com",
    projectId: "mahjongpals-30f80",
    storageBucket: "mahjongpals-30f80.appspot.com",
    messagingSenderId: "315957219952",
    appId: "1:315957219952:web:b2d3844cdf3bc7e9e5dab5",
    measurementId: "G-7N74E6C4ZJ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);