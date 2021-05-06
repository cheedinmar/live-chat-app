  
  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBQRJiLcK2GYNr6X7__2LWRsVzXuS3BQQ8",
    authDomain: "live-chat-app-f31d0.firebaseapp.com",
    projectId: "live-chat-app-f31d0",
    storageBucket: "live-chat-app-f31d0.appspot.com",
    messagingSenderId: "737374726970",
    appId: "1:737374726970:web:4561e9e900077351d07e03",
    measurementId: "G-N9QP8MYX7K"
  };
  // Initialize Firebase
 const firebaseapp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
firebaseapp.firestore().settings({ timestampsInSnapshots : true})
  export default firebaseapp.firestore(  )