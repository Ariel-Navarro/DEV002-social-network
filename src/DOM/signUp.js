import { signup } from '../firebase/auth.js'

import { pantallaRegistro } from '../templates/templateSignUp.js'

export default () => {
    const elementDiv = document.createElement('section');
    elementDiv.className = 'pantalla';
    elementDiv.id = 'inicio';
    elementDiv.innerHTML = pantallaRegistro;

    const signUpBtn = elementDiv.querySelector('#signUpBtn');
    const iniciar = elementDiv.querySelector('#iniciar');

    iniciar.addEventListener('click', () => {
        onNavigate('/');
    });

    signUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signup(email.value, password.value)
            .then(() => {
                elementDiv.querySelector('#signUpEmail').value = "";
                elementDiv.querySelector('#signUpPassword').value = "";

            })
            .catch((error) => {
                console.log(error.message);
                console.log(error.code);

                if (error.code === 'auth/email-already-in-use') {
                    alert('Este correo ya está en uso');
                } else if (error.code === 'auth/weak-password') {
                    alert('Tu contraseña es muy débil');
                } else if (error.code === 'auth/invalid-email') {
                    alert('Este correo es inválido');
                }
            })  

    })
        return elementDiv;

}

