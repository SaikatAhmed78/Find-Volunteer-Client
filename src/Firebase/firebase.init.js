import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId,
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACG_vHmi5PsftbDVTTa4NoTWOoPktBEEk",
//   authDomain: "assigment-11-e80f3.firebaseapp.com",
//   projectId: "assigment-11-e80f3",
//   storageBucket: "assigment-11-e80f3.firebasestorage.app",
//   messagingSenderId: "717368224328",
//   appId: "1:717368224328:web:bf6ca3998a8ae129c1867d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;