import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBIlAV6D_bVWf3U8WijVjrzvMBaOF2lTIs",
  authDomain: "saraflix-c8463.firebaseapp.com",
  projectId: "saraflix-c8463",
  storageBucket: "saraflix-c8463.appspot.com",
  messagingSenderId: "715861286418",
  appId: "1:715861286418:web:2467f3645bb2ee52bb02cb",
  measurementId: "G-B28QLVYTKT"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
