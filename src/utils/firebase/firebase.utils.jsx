// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,
         getAuth,
         signInWithPopup,
         signInWithRedirect } from 'firebase/auth'

import{
    getFirestore,
    Doc,doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUQE75ZqoDaO3-ghW3LXDrKk9krJp75g",
  authDomain: "prada-clothing-db.firebaseapp.com",
  projectId: "prada-clothing-db",
  storageBucket: "prada-clothing-db.appspot.com",
  messagingSenderId: "1093547067269",
  appId: "1:1093547067269:web:7ecb56276ed0edaa6be6ec"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)

export const db = getFirestore();

export const creatUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log("uid",userDocRef);
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot.exists());
if(!userSnapShot.exists()){
  const {displayName,email} = userAuth;
  const createdAt = new Date();
  try {
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt
    })
  } catch (error) {
    console.log('error creating the user',error.message);
  }
}
  return userDocRef;
}
