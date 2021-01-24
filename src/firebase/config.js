import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOSZiOo-LS7Uhei2YtqWsgZu_IT06bOPA",
  authDomain: "firegram-85961.firebaseapp.com",
  databaseURL: "https://firegram-85961.firebaseio.com",
  projectId: "firegram-85961",
  storageBucket: "firegram-85961.appspot.com",
  messagingSenderId: "535773769334",
  appId: "1:535773769334:web:b611db00480bec03717957"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };