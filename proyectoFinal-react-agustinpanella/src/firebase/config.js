//configuracion personal hecha por mi
import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtWhmko1QKtiEdBSd9B_TOXDsCpVBU1s",
  authDomain: "final-react-agustinpanella.firebaseapp.com",
  projectId: "final-react-agustinpanella",
  storageBucket: "final-react-agustinpanella.appspot.com",
  messagingSenderId: "766419921726",
  appId: "1:766419921726:web:08ae2f1f7e01834a6e9a6f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () =>{
    return firebase.firestore(app)
}