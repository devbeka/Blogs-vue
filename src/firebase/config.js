import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDKGt_wYqUKHof5K5-FN3Q7qtZt1mey8LU',
  authDomain: 'blogs-596a8.firebaseapp.com',
  projectId: 'blogs-596a8',
  storageBucket: 'blogs-596a8.appspot.com',
  messagingSenderId: '753422540438',
  appId: '1:753422540438:web:11fd8f67e4d9921e08ecb7',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, timestamp, auth }
