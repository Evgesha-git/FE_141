import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlT47TA38iusZ6pFbEFvrBKGVRXAsFGZM",
  authDomain: "live-chat-e9e6c.firebaseapp.com",
  projectId: "live-chat-e9e6c",
  storageBucket: "live-chat-e9e6c.firebasestorage.app",
  messagingSenderId: "449423927736",
  appId: "1:449423927736:web:6d8586b9bfc54aac13074d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
  app,
  db,
  auth
}