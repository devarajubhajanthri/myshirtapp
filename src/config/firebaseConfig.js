import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWGR6a1YUjdEWVldsFDM-egES1A4RdrhM",
    authDomain: "myshirt-f25cc.firebaseapp.com",
    databaseURL: "https://myshirt-f25cc.firebaseio.com",
    projectId: "myshirt-f25cc",
    storageBucket: "myshirt-f25cc.appspot.com",
    messagingSenderId: "402404489491",
    appId: "1:402404489491:web:74b8d05c0eee166677c2e6",
    measurementId: "G-RQ8L22X02H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }