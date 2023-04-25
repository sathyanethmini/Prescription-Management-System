// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC63VbuTfU2tZiZZ0SFNbDtrbkVD0S1Rcc",
  authDomain: "mpms-dev-47be8.firebaseapp.com",
  projectId: "mpms-dev-47be8",
  storageBucket: "mpms-dev-47be8.appspot.com",
  messagingSenderId: "381011576121",
  appId: "1:381011576121:web:5e1e9952c3dee49ee3d4e8",
  measurementId: "G-MTSDENKD2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
export const storage = getStorage(app);
