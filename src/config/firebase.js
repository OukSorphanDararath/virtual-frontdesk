// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ7jterUyEMMZhmopUStuPKOVPjNVxXgQ",
  authDomain: "virtual-frontdesk.firebaseapp.com",
  projectId: "virtual-frontdesk",
  storageBucket: "virtual-frontdesk.appspot.com",
  messagingSenderId: "201151179527",
  appId: "1:201151179527:web:f7a372cb10ba03c02d33a2",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
