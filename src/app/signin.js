import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// import { async } from "regenerator-runtime"
import { auth } from "./firebase.js"

const signin = document.querySelector('#loginBtn')
console.log('holitas')

signin.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('si lo lee')
    const email = login['signin-email'].value
    const password = login['signin-password'].value
    console.log(email)

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        console.log('Hola Ariel')
    } catch (error) {
        console.log(error)
    }
})