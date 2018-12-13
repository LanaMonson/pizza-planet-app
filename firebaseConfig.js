import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBERWvvCw5GNS-b22NM_7eHYqqsg-3q54A",
    authDomain: "pizza-planet-68a65.firebaseapp.com",
    databaseURL: "https://pizza-planet-68a65.firebaseio.com",
    projectId: "pizza-planet-68a65",
    storageBucket: "pizza-planet-68a65.appspot.com",
    messagingSenderId: "229078707823"
  };
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
