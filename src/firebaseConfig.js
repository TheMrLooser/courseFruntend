import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyBoO4vWCAPE57qCS2x3pm3JqAfAlbkh6aE",
  authDomain: "paradoxcoursevideo.firebaseapp.com",
  projectId: "paradoxcoursevideo",
  storageBucket: "paradoxcoursevideo.appspot.com",
  messagingSenderId: "477553857735",
  appId: "1:477553857735:web:d285e0940bd8d558c3dae2"
};

export const app = initializeApp(firebaseConfig);