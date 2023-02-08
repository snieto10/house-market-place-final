import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBtQq8G3J9F03S2lTh66giKc3BJSplrpP8',
  authDomain: 'house-market-place-7439c.firebaseapp.com',
  projectId: 'house-market-place-7439c',
  storageBucket: 'house-market-place-7439c.appspot.com',
  messagingSenderId: '772336249171',
  appId: '1:772336249171:web:6491cbe807d8068d8619a6',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
