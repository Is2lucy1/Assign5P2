// import { boot } from 'quasar/wrappers
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAyX9LWAKiyVgFa3JRbphQkNd51qY9atnA',
  authDomain: 'quitter2-2fb0a.firebaseapp.com',
  projectId: 'quitter2-2fb0a',
  storageBucket: 'quitter2-2fb0a.appspot.com',
  messagingSenderId: '565517259556',
  appId: '1:565517259556:web:7ef709c1363fb527db59b1'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
