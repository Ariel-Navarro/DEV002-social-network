import {
    login,
    googleLog,
} from '../firebase/auth.js'

import { pantallaInicio } from '../View/templates/templatesSignIn.js'

let user, displayName, uid, emailUser

export default () => {
    const elementDiv = document.createElement('section');
    elementDiv.className = 'pantalla';
    elementDiv.id = 'inicio';
    elementDiv.innerHTML = pantallaInicio;

    const loginBtn = div.querySelector('#loginBtn');
    const botonGoogle = div.querySelector('#loginGoogle');
    const registrate = div.querySelector('#registrate');

    loginBtn.addEventListener('click', () => {

        login(email.value, password.value)
            .then((credential) => {
                user = credential.user;
                displayName = (user.displayName);
                uid = (user.id);
                emailUser = (user.email);
                console.log(displayName, emailUser, uid)
            })
            .catch((error) => {
                console.log(error.message);
                console.log(error.code);

                if (error.code === 'auth/weak-password') {
                    alert('Tu contraseña es muy débil');
                } else if (error.code === 'auth/invalid-email') {
                    alert('Este correo es inválido');
                }
                // Podríamos hacer como último else if que no lleve a login si no esta registrado o iniciado sesión
            });

    });
    botonGoogle.addEventListener('click', () => {
        googleLog()
            .then((user) => {
                // Aquí llevar al usuario a /home
                const googleUser = (user.user.displayName);
                const googleEmail = (user.user.email);
                const googleUid = (user.user.uid);
                const googlePhotoURL = (user.user.photoURL)
                console.log(googleEmail, googlePhotoURL, googleUid, googleUser)
            })
    })

    registrate.addEventListener('click', () => {
        // onNavigate('/registro');
    });
    return elementDiv;
}