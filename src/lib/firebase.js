import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDLkFZRD0iHEqu57K4I92LaQuUej45z8BY",
  authDomain: "instagaram-38c72.firebaseapp.com",
  projectId: "instagaram-38c72",
  storageBucket: "instagaram-38c72.appspot.com",
  messagingSenderId: "962278889810",
  appId: "1:962278889810:web:8b970435a8a6d1f7fe028b",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
