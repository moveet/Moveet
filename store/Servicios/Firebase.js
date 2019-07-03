import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBERs96bQ-4X_4vTkkimpy6kppYpsggQQs",
    authDomain: "moveet-c6f78.firebaseapp.com",
    databaseURL: "https://moveet-c6f78.firebaseio.com",
    projectId: "moveet-c6f78",
    storageBucket: "",
    messagingSenderId: "965264054734",
    appId: "1:965264054734:web:562b123a2fe8d2ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const autenticacion = firebase.auth();
  export const dataBase = firebase.database();