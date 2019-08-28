import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC29Ql9V7LbeHScyHcl7Lp_vgpC1ChV1Z8",
    authDomain: "pessoa-fcc10.firebaseapp.com",
    databaseURL: "https://pessoa-fcc10.firebaseio.com",
    projectId: "pessoa-fcc10",
    storageBucket: "pessoa-fcc10.appspot.com",
    messagingSenderId: "191783790152",
    appId: "1:191783790152:web:5aea13aa7f52b6c5"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
