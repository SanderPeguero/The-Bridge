// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbAxUS1cCDJd39e5un46Q8EYiWtZ5R-f0",
    authDomain: "the-bridge-535cf.firebaseapp.com",
    databaseURL: "https://the-bridge-535cf-default-rtdb.firebaseio.com",
    projectId: "the-bridge-535cf",
    storageBucket: "the-bridge-535cf.appspot.com",
    messagingSenderId: "451520529968",
    appId: "1:451520529968:web:f13148d0b246df7962cff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


//Mantenerse pendiente a los cambios de los datos en la base de datos y actualizar los de la aplicacion
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// const starCountRef = ref(db, 'quizList/');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });


//Leer los datos una sola vez
// const dbRef = ref(getDatabase());




export default app