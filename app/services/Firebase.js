import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD0NOHAlp9qGvKggLhx_kD_b5lsDhAWo9w",
    authDomain: "rock-like-a-hurricane.firebaseapp.com",
    databaseURL: "https://rock-like-a-hurricane.firebaseio.com",
    projectId: "rock-like-a-hurricane",
    storageBucket: "rock-like-a-hurricane.appspot.com",
    messagingSenderId: "726403165337"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);