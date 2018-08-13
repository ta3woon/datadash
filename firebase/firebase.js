// firebase.js: The file where all the configuration goes that you have seen previously on your Firebase dashboard. In addition, Firebase itself will be instantiated in this file.
import DB_CONFIG from '../config'
import * as firebase from 'firebase';

const prodConfig = DB_CONFIG;

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};


// export const DB_CONFIG = {
//     apiKey: "AIzaSyD7y8kIAwE4EMQ6d6iDDQrMZaeW9ckVhJM",
//     authDomain: "dtig-data-dashboard.firebaseapp.com",
//     databaseURL: "https://dtig-data-dashboard.firebaseio.com",
//     projectId: "dtig-data-dashboard",
//     storageBucket: "dtig-data-dashboard.appspot.com",
//     messagingSenderId: "601848630693"
//   };