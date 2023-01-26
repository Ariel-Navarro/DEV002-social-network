/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signup } from '../app/signupForm.js'; **

import { onNavigate } from '../main.js';
import { auth, onAuthStateChanged, signup } from '../app/auth.js';
import { templateRegister } from '../Templates/signUp.js';

// Pantalla 2 - Registrate --------------------------------
export const Register = () => {
  const div = document.createElement('div');
  div.className = 'Inicio';
  div.id = 'inicio';
  div.innerHTML = templateRegister;
  const signUpBtn = div.querySelector('#signUpBtn');
  const iniciar = div.querySelector('#iniciar');

  iniciar.addEventListener('click', () => {
    onNavigate('/');
  });

  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const signupForm = div.querySelector('#registro');

    const email = signupForm.signUpEmail.value;
    const password = signupForm.signUpPassword.value;
    console.log(email, password);
    signup(email, password)
      .then(() => {
        div.querySelector('#signUpEmail').value = '';
        div.querySelector('#signUpPassword').value = '';
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
      });

    console.log(':(');

    const valor = div.querySelector('#signUpName').value;
    console.log(valor);
    localStorage.setItem('Nombre', valor);

    onAuthStateChanged(auth, async (user) => {
      console.log('ónauth');
      try {
        console.log('try');
        if (user) {
          onNavigate('/bienvenida');
          console.log('if');
        }
      } catch (error) {
        console.log(error);
        console.log('catch');
      }
    });
  });

  return div;
};
