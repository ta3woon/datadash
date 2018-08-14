import * as firebase from 'firebase';
import uuid from 'uuid/v4'
import './auth';
import './db';


const firebaseConfig = {
    apiKey: "AIzaSyD7y8kIAwE4EMQ6d6iDDQrMZaeW9ckVhJM",
    authDomain: "dtig-data-dashboard.firebaseapp.com",
    databaseURL: "https://dtig-data-dashboard.firebaseio.com",
    projectId: "dtig-data-dashboard",
    storageBucket: "dtig-data-dashboard.appspot.com",
    messagingSenderId: "601848630693"
  };


// firebase.intitalizeApp(firebaseConfig)

// const firebaseDB = firebase.firebaseDB()
// prodConfig = firebaseConfig;

// export const addTaskToFirebase = (task) => {
// 	const id = uuid()
// 	database.ref(`${id}`).set({
// 		task, id
// 	})
// }

// export const removeTaskFromFirebase = (id) => {
// 	database.ref(`${id}`).remove()
// }

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};