import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyC8F8ZIqOQnYDCNg-wJ_QxJQJ26cHv_UeQ",
  authDomain: "crwn-clothing-10138.firebaseapp.com",
  databaseURL: "https://crwn-clothing-10138-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crwn-clothing-10138",
  storageBucket: "crwn-clothing-10138.appspot.com",
  messagingSenderId: "213528232730",
  appId: "1:213528232730:web:93fe8cda9c2f27302a62a3",
  measurementId: "G-0Y77EE15XB"
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

export const addCollectionAndDocuments = async (
  collectionsKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionsKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((collection) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, collection);
  });

  batch.commit();
  return;
};

export const convertCollectionSnapshotToMap = async (snapShot) => {
  const collectionMap = snapShot.docs.map((doc) => {
    const { title, items, id } = doc.data();
    return { title, items, id, routeName: encodeURI(title.toLowerCase()) };
  });

  return collectionMap.reduce((acc, doc) => {
    acc[doc.title.toLowerCase()] = doc;
    return acc;
  }, {});
};
