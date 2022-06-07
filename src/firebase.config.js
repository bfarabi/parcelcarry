
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyC76IDii5P96HS23x5GjCbHV3bqbtcOd4c",
  authDomain: "parcel-carry-otp.firebaseapp.com",
  projectId: "parcel-carry-otp",
  storageBucket: "parcel-carry-otp.appspot.com",
  messagingSenderId: "27264340202",
  appId: "1:27264340202:web:6b7ba78b138db022360793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication= getAuth(app);