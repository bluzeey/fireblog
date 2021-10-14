// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQvVXnq1lyQdSmKOToaxpFzHssc2W-eOw",
  authDomain: "fireblog-clone.firebaseapp.com",
  projectId: "fireblog-clone",
  storageBucket: "fireblog-clone.appspot.com",
  messagingSenderId: "336313726317",
  appId: "1:336313726317:web:cb5191174af50c7e631664"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();