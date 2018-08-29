import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAC1AhrKGvthNe3t8x3PO9N3tKSwTBRrys",
  authDomain: "react-login-firebase-app.firebaseapp.com",
  databaseURL: "https://react-login-firebase-app.firebaseio.com",
  projectId: "react-login-firebase-app",
  storageBucket: "react-login-firebase-app.appspot.com",
  messagingSenderId: "158530466688"
};
var fire = firebase.initializeApp(config);
export const db = firebase.firestore()
export default fire
