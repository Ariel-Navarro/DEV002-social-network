/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { homeE } from '../app/home.js';
import { mainApp, onNavigate } from '../main.js';
// import { goToHome } from './logIn.js';
// Vista de Home de Petsbook

export default () => {
  mainApp.innerHTML = '';
  const templateHome = `
  <div class='home'>  
    <div id="cabeza">
     <div class='head'><img id= "logoDeVistaHome" src="imagenes/Logo.png" width=50px>
     <span id="etsbook">ETSBOOK</span></div>
     <img id="mas" src="imagenes/mas.png" width=30px height=30px>
    </div>

    <form class="postPorPublicar" id="task-form">
        <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario' >
        <input id='description' class="inputPostPorPublicar" placeholder='¿En qué estás pensando?'>
        <button id='guardar' class="Publicar">Publicar</button>
    </form> 
    
    <div id='task-container'></div>

    
    <div class="footerDeHome">
    <div class = "divIconoHome">
     <img class="iconHome" src="imagenes/home.png" width=25px alt='foto del usuario'>
    </div>
     <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
    </div>
    `;

  mainApp.innerHTML = templateHome;
  console.log('home');
  homeE();
  // goToHome();
};

// <section class="post">

// <div class="cabezaDePost">
// <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
// <p class="nombreDeUsuario">Manchitas</p>
// <img src="imagenes/mas.png" width=30px height=30px>
// </div>

// <div class="cuerpoDePost" >
// <p class="contenido"> Hoy me siento...</p>
// </div>
// <div  class="linea"></div>
// <div class="footerDePost">
// <img src="imagenes/huella.png" width=30px>
// <p>1 Me encanta</p>
// </div>

// </section>
