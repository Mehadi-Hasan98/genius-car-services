// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgtHhSZqecugD-sAVKrDwulkK1LMOhpLQ",
  authDomain: "genius-car-services-d3a2b.firebaseapp.com",
  projectId: "genius-car-services-d3a2b",
  storageBucket: "genius-car-services-d3a2b.appspot.com",
  messagingSenderId: "348428031638",
  appId: "1:348428031638:web:217dce10ebb00feb1cd4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;