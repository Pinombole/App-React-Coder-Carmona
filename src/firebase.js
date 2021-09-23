import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBT-OZTw-6fJgxrVC_cJzVquwXLegv5Bhw",
    authDomain: "app-curso-react-coder.firebaseapp.com",
    projectId: "app-curso-react-coder",
    storageBucket: "app-curso-react-coder.appspot.com",
    messagingSenderId: "990412362505",
    appId: "1:990412362505:web:844ae2f169ecc956d1f9d8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)