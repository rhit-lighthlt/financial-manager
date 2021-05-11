import firebase from "firebase"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAZAOetdx0bgslv6ZrbYD3hz4dpTdgyR10",
    authDomain: "expense-manager-36e34.firebaseapp.com",
    projectId: "expense-manager-36e34",
    storageBucket: "expense-manager-36e34.appspot.com",
    messagingSenderId: "193911687531",
    appId: "1:193911687531:web:70e7a16765984169bda42e",
    measurementId: "G-RZE8TE4K5G"
  
}

firebase.initializeApp(config)
export default firebase