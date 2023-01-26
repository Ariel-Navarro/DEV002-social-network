/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import {  } from '../app/firebase.js';

import {
  onAuthStateChanged, auth, login, googleLog,
} from '../app/auth.js';
import { onNavigate } from '../main.js';

import './home.js';
import { templateInicio } from '../Templates/logIn.js';
// //Pantalla 1 - Inicio de sesión---------------------------

export const Login = () => {
  const div = document.createElement('div');
  div.className = 'Inicio';
  div.id = 'inicio';
  div.innerHTML = templateInicio;
  // ir a pantalla registrar y home

  const loginBtn = div.querySelector('#loginBtn');
  const signinForm = div.querySelector('#login');
  const botonGoogle = div.querySelector('#loginGoogle');
  const registrate = div.querySelector('#registrate');

  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signinForm.loginEmail.value;
    const password = signinForm.loginPassword.value;
    let user, displayName, uid, emailUser;

    login(email, password)
      .then((credential) => {
        user = credential.user;
        displayName = (user.displayName);
        uid = (user.uid);
        emailUser = (user.email);
        console.log(credential);
        console.log(displayName, emailUser, uid);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/weak-password') {
          alert('Tu contraseña es muy débil');
        } else if (error.code === 'auth/invalid-email') {
          alert('Este correo es inválido');
        } else if (error.code === 'auth/internal-error') {
          alert('Probablemente te olvidaste de ingresar tu contraseña');
        } else if (error.code === 'auth/user-not-found') {
          alert('Esta cuenta no está creada');
        } else if (error.code === 'auth/wrong-password') {
          alert('Contraseña incorrecta');
        }
      });
  });

  botonGoogle.addEventListener('click', () => {
    googleLog()
      .then((user) => {
        // Aquí llevar al usuario a /home
        const googleUser = (user.user.displayName);
        const googleEmail = (user.user.email);
        const googleUid = (user.user.uid);
        const googlePhotoURL = (user.user.photoURL);
        console.log(googleEmail, googlePhotoURL, googleUid, googleUser);
        onNavigate('/home');
      });
  });

  registrate.addEventListener('click', () => {
    onNavigate('/registro');
  });

  loginBtn.addEventListener('click', () => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          onNavigate('/home');
        }
      } catch (error) {
        console.log(error);
      }
    });
  });

  return div;
};
