import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5w2Rb91S8FLyrvH0rOiJG-VMe0HSNbQM",
  authDomain: "msg-01-105f8.firebaseapp.com",
  projectId: "msg-01-105f8",
  storageBucket: "msg-01-105f8.appspot.com",
  messagingSenderId: "72423144855",
  appId: "1:72423144855:web:c82a591e1eac1889bd18d2"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
