import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {GOOGLE_MAPS_APIKEY, FIREBASE_APP_ID,FIREBASE_MEASUREMENT_ID, DATABASE_URL, FIREBASE_MESSAGING_SENDER_ID} from "@env";

console.log('');

const firebaseConfig = {
    apiKey: GOOGLE_MAPS_APIKEY,
    authDomain: "flowairbnb.firebaseapp.com",
    databaseURL: DATABASE_URL,
    projectId: "flowairbnb",
    storageBucket: "flowairbnb.appspot.com",
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
