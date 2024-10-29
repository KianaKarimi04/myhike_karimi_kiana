//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBkLNvttR0u-tBvCg1tLZZ8x3X4gpY7WU0",
  authDomain: "comp1800-10143.firebaseapp.com",
  projectId: "comp1800-10143",
  storageBucket: "comp1800-10143.appspot.com",
  messagingSenderId: "745208470584",
  appId: "1:745208470584:web:db4072c26ac33f0bd91acd",
  measurementId: "G-YP77RKFJCD"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
