import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAaHujdBL3hRwyyZPvN5uKmHP5hjGRA08w",
    authDomain: "discord-clone-7a996.firebaseapp.com",
    projectId: "discord-clone-7a996",
    storageBucket: "discord-clone-7a996.appspot.com",
    messagingSenderId: "691346062174",
    appId: "1:691346062174:web:b96d15766aa616eb6e6dcf",
    measurementId: "G-64VLZ4PMQK"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    })
  };


  






