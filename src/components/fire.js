import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAGsQ4AXXJcK7ylKQkx3dO7GAFd93BOeqg",
    authDomain: "ccmidterm-9bfcd.firebaseapp.com",
    projectId: "ccmidterm-9bfcd",
    storageBucket: "ccmidterm-9bfcd.appspot.com",
    messagingSenderId: "4381319764",
    appId: "1:4381319764:web:8faa3182541fcf44b043c1"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;