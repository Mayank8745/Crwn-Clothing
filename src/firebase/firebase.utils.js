import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxi7KRGGy8UiHnNBMsFsFZk_mcIh_NXuA",
  authDomain: "crwn-db-f9711.firebaseapp.com",
  projectId: "crwn-db-f9711",
  storageBucket: "crwn-db-f9711.appspot.com",
  messagingSenderId: "901745859910",
  appId: "1:901745859910:web:5337247050b7608baa5947",
  measurementId: "G-W543RYN4ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userCollection = collection(db, "users");
  const userRef = doc(userCollection, `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userRef, {
        displayName,
        email,
        createdAt: createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};
