/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import {  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { homeE } from './post.js';
import { onNavigate } from '../main.js';
import { auth, onAuthStateChanged, logout } from '../app/auth.js';
import { templateHome } from '../Templates/home.js';
// Vista de Home de Petsbook
// import { loginCheck } from '../app/loginCheck.js'

export const Home = () => {
  onAuthStateChanged(auth, async (user) => {
    try {
      if (!user) {
        onNavigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  });

  const div = document.createElement('div');
  div.className = 'Inicio';

  div.innerHTML = templateHome;
  const taskContainer = div.querySelector('#task-container');
  console.log(taskContainer);
  const taskForm = div.querySelector('#task-form');
  console.log(taskForm);
  homeE(taskContainer, taskForm, div);

  const xSalir = div.querySelector('#xSalir');
  const puntos = div.querySelector('#puntos');
  const modalPuntos = div.querySelector('#modalPuntos');
  const logOut = div.querySelector('#logOut');
  const x = div.querySelector('#x');
  const logoutQContainer = div.querySelector('#logoutQContainer');
  const logoutQ = div.querySelector('#logoutQ');
  const logoutBtn = div.querySelector('#logoutBtn');
  const nombObte = div.querySelector('#nomb-obte');

  // obtengo el valor del local storage
  const nombreObtenido = localStorage.getItem('Nombre');

  nombObte.innerHTML = `Hola, ${nombreObtenido}`;

  logoutBtn.addEventListener('click', () => {
    logout();
    localStorage.clear();
    onNavigate('/');
    console.log('logout');
  });

  puntos.addEventListener('click', () => {
    modalPuntos.style.display = 'flex';
  });

  x.addEventListener('click', () => {
    modalPuntos.style.display = 'none';
    logoutQ.style.display = 'none';
    logoutQContainer.style.display = 'none';
  });

  logOut.addEventListener('click', () => {
    logoutQ.style.display = 'flex';
    logoutQContainer.style.display = 'flex';
    modalPuntos.style.display = 'none';
  });

  xSalir.addEventListener('click', () => {
    logoutQContainer.style.display = 'none';
    logoutQ.style.display = 'none';
    modalPuntos.style.display = 'none';
  });
  return div;
};
