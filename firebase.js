import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOG0FNppjmdjzbSghETjjUEm1nPg-CsiU",
  authDomain: "pomf-saver.firebaseapp.com",
  projectId: "pomf-saver",
  storageBucket: "pomf-saver.appspot.com",
  messagingSenderId: "179573700881",
  appId: "1:179573700881:web:81a8664f831394f57e74b0",
  measurementId: "G-59QWYK8BEE",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Google Sign-In
const provider = new GoogleAuthProvider();

document.getElementById("sign-in-btn").addEventListener("click", () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      user.getIdToken().then((token) => {
        // Use the token in your POST request
        console.log("User token:", token);
      });
    })
    .catch((error) => {
      console.error("firebase.js line 34: Error during sign-in:", error);
    });
});
