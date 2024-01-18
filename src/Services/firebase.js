import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBpb1vyYYyGDIJx9tCkNMlLtypYUEBe95A",
  authDomain: "cinemago-bc877.firebaseapp.com",
  projectId: "cinemago-bc877",
  storageBucket: "cinemago-bc877.appspot.com",
  messagingSenderId: "719994922685",
  appId: "1:719994922685:web:3baa59b32a1823e87439d4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)