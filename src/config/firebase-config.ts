// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVeQt8wSiuVKbPPaDt2ye-jsCUHte3tOc',
  authDomain: 'top-chatters.firebaseapp.com',
  projectId: 'top-chatters',
  storageBucket: 'top-chatters.appspot.com',
  messagingSenderId: '943232759259',
  appId: '1:943232759259:web:ca2b30b734654ae66b63fe',
  measurementId: 'G-74168TYYWG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
