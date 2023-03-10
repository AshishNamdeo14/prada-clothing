// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, 
      doc, 
      getDoc,
      setDoc,
      collection,
      writeBatch,
      query,
      getDocs
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUQE75ZqoDaO3-ghW3LXDrKk9krJp75g",
  authDomain: "prada-clothing-db.firebaseapp.com",
  projectId: "prada-clothing-db",
  storageBucket: "prada-clothing-db.appspot.com",
  messagingSenderId: "1093547067269",
  appId: "1:1093547067269:web:7ecb56276ed0edaa6be6ec",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);



export const db = getFirestore();
console.log("getFirestore",db)

export const creatUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName);
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithSignInandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const bacth = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase())
    bacth.set(docRef,object)
  })

  await bacth.commit();
  console.log("Done")

}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q);

    const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot) => {
      const {title,items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc
    },{})

    return categoryMap
}

export const signInAuthUserWithSignInandPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthChangedListener = (callback) => onAuthStateChanged(auth,callback);