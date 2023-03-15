
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,EmailAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsk5t9Du9UpQlqe-LK5r0jC7FLmn-FUTo",
  authDomain: "onlinequiz-4e185.firebaseapp.com",
  projectId: "onlinequiz-4e185",
  storageBucket: "onlinequiz-4e185.appspot.com",
  messagingSenderId: "1032087029285",
  appId: "1:1032087029285:web:db3bca016f94502992e1cc"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const handleSignup = ({email, password}) =>  EmailAuthProvider.credential(email, password)

// await createUserWithEmailAndPassword(auth, email, password)