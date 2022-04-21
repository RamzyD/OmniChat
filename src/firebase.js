import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD2SujicsdNXAcD_b-0E1wzStw-nbwEIj8",
    authDomain: "omnichat-79cf3.firebaseapp.com",
    projectId: "omnichat-79cf3",
    storageBucket: "omnichat-79cf3.appspot.com",
    messagingSenderId: "132100097024",
    appId: "1:132100097024:web:86c81d7fbe4768be4a44e5",
    measurementId: "G-9JDQQTCRMP",
  }).auth();
