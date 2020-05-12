import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9ltyEL4dD8hgpZKgtlxuFPNrnW4G1JoA",
  authDomain: "social-medium-ad4f1.firebaseapp.com",
  databaseURL: "https://social-medium-ad4f1.firebaseio.com",
  projectId: "social-medium-ad4f1",
  storageBucket: "social-medium-ad4f1.appspot.com",
  messagingSenderId: "396638586708",
  appId: "1:396638586708:web:f9f65915c6a10310296ac1",
  measurementId: "G-4WE9J60EMN",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
