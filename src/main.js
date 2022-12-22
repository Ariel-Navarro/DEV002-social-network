import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// import { async } from "regenerator-runtime";
import { auth } from "./app/firebase.js";
import './app/signupForm.js'
import './app/signin.js'
import './app/logout.js'


// Este es el punto de entrada de tu aplicacion


// import { myFunction } from './lib/index.js';

onAuthStateChanged(auth, async (user) => {
if(user){

}else{

}
});
