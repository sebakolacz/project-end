import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyC99PcxNgXiLMJ7zILZVEmmlkckAiVpxmQ",
    authDomain: "project-end-bb0e5.firebaseapp.com",
    databaseURL: "https://project-end-bb0e5.firebaseio.com",
    projectId: "project-end-bb0e5",
    storageBucket: "project-end-bb0e5.appspot.com",
    messagingSenderId: "788670430919",
    appId: "1:788670430919:web:7f4b058da10a0f76f848e2",
    measurementId: "G-G46VGQRD01"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export { db };