import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDIoNMvP6VmVVxu-Tp109NYxaEKdp9qOW4",
  authDomain: "react-1f208.firebaseapp.com",
  projectId: "react-1f208",
  storageBucket: "react-1f208.appspot.com",
  messagingSenderId: "217499902054",
  appId: "1:217499902054:web:2c6301ba9e65208e8c4da7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const commentsCollection = collection(db, 'comments');

export default commentsCollection;