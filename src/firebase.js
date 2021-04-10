import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHARbKPT8veWVE6fOAPDXn3F820502Z9I",
  authDomain: "clone-7ffe5.firebaseapp.com",
  projectId: "clone-7ffe5",
  storageBucket: "clone-7ffe5.appspot.com",
  messagingSenderId: "477251885047",
  appId: "1:477251885047:web:5406be7ccba23a81df40f2",
  measurementId: "G-NCZ7RHX9KM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
