
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBd4B25PUZ4oejxL5STNxUKzQSmuf88cyY",
    authDomain: "website-5201b.firebaseapp.com",
    projectId: "website-5201b",
    storageBucket: "website-5201b.appspot.com",
    messagingSenderId: "303801008358",
    appId: "1:303801008358:web:b946de9055fc2fd98ffb27",
    measurementId: "G-HSJ30TKG7M"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);