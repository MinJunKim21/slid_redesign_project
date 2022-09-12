// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8khJW2ACm5dXNFOcUwK-RogLyBpkOgZM',
  authDomain: 'slid-redesign-project.firebaseapp.com',
  projectId: 'slid-redesign-project',
  storageBucket: 'slid-redesign-project.appspot.com',
  messagingSenderId: '914977772481',
  appId: '1:914977772481:web:740b495255f7fa4e9c9540',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
