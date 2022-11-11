import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
/*const app = firebase.initializeApp({
  apiKey: 'AIzaSyBCS_66Lh7MZvbYbwoM0YMv4oHpDcexAps',
  authDomain: 'auctioneer-7020f.firebaseapp.com',
  projectId: 'auctioneer-7020f',
  storageBucket: 'auctioneer-7020f.appspot.com',
  messagingSenderId: '159246459335',
  appId: '1:159246459335:web:b200f4e877df1aa00fb9e2',
});
*/
const app=firebase.initializeApp( {
  apiKey: "AIzaSyBp_lL7pmYlU_jN9zLA8VnUwMnWsckHmWc",
  authDomain: "auction-3c58a.firebaseapp.com",
  projectId: "auction-3c58a",
  storageBucket: "auction-3c58a.appspot.com",
  messagingSenderId: "1088157428606",
  appId: "1:1088157428606:web:62dd99761cec5f9030a12f"
});
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
