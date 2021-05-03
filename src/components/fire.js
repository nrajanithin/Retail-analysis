import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBHM8xXHc6dGnGj5Ve_e2G-T7XBASCzbiQ",
  authDomain: "ccmidterm-1df6d.firebaseapp.com",
  projectId: "ccmidterm-1df6d",
  storageBucket: "ccmidterm-1df6d.appspot.com",
  messagingSenderId: "956009818317",
  appId: "1:956009818317:web:144c73c81dab78d5516184"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;