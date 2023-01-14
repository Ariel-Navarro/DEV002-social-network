import { bienvenida } from '../templates/templaateWelcome.js'

import { userState } from '../firebase/auth.js'

export default () => {

    // Podemos incluir aquí el observador (userState(ahora sí))

    const elementDiv = document.createElement('section');
    elementDiv.className = 'pantalla';
    elementDiv.id = 'inicio';
    elementDiv.innerHTML = bienvenida;

    const holaBienv = elementDiv.querySelector('#hola-bienvenida');
    console.log(holaBienv);
    // obtengo el valor del local storage
    const nombreObtenido = localStorage.getItem('Nombre');

    holaBienv.innerHTML = `¡Hola ${nombreObtenido}, tu cuenta ha sido creada con exito!`;

    const comenzarBtn = elementDiv.querySelector('#comenzarBtn');
    comenzarBtn.addEventListener('click', () => {
        onNavigate('/home');
    });
    return elementDiv;
}