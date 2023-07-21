// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYwFMBm958nH2-EIg6toibKwZAandYOR0",
  authDomain: "realtor-clone-react-44ad4.firebaseapp.com",
  projectId: "realtor-clone-react-44ad4",
  storageBucket: "realtor-clone-react-44ad4.appspot.com",
  messagingSenderId: "700804082986",
  appId: "1:700804082986:web:f092ad8d116448d3830253"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db =getFirestore()