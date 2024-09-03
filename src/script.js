let main = document.querySelector(".main");
let loginlink = document.querySelector(".loginlink")
let createlink = document.querySelector(".createlink")
let formbox = document.querySelector(".formbox")

loginlink.addEventListener("click",function(){
    main.classList.add('active');
    // formbox.style.display = "none"
    // alert("cnknc")
})
createlink.addEventListener("click",function(){
    main.classList.remove('active');
})
import {app,auth} from "./firebase.mjs"
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

let create = document.getElementById("create")
create.addEventListener("click",function(event){
    event.preventDefault()
    let email = document.getElementById("email").value
let password = document.getElementById("password").value
let name = document.getElementById("name").value

    createUserWithEmailAndPassword(auth, email, password,name)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("creating your account")
      window.location.href = "dashboard.html"
      password.value = ""
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  
      // console.log(email,password);
  
    
    })

    let login = document.getElementById("login")

    login.addEventListener("click",function(event){
      event.preventDefault()

   
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
   
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       alert("logging in")
       window.location.href = "dashboard.html"
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage)
       // ..
     });
   
       console.log(email,password);
     })
let eyeicon = document.getElementById("eye-icon")
let pass = document.getElementById("password")
     
// eyeicon.addEventListener("focus", function(){
//   alert("ncjnkn")
//     if(pass.type === 'password'){
//           pass.type = 'text'
//           eye.classList.add('fa-eye-slash')
//       }
//       else{
//           pass.type = "password"
//           eye.classList.remove('fa-eye-slash')
//       }
//       // alert("ncjnkn")
      
// })
eyeicon.style.display = "none"
  