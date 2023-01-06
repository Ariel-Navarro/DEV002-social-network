
//import { homeE } from '../app/home.js'; **
//import { onNavigate } from '../main.js'; **

// Vista de Home de Petsbook

export const Home = () => {
    const div = document.createElement("div");
    div.className = "home";
    div.id = "home";
    const templateHome = `
            <div id="cabeza">
                <div class='head'><img id= "logoDeVistaHome" src="imagenes/Logo.png" width=50px>
                    <span id="etsbook">ETSBOOK</span>
                </div>
                <div class="menuArriba" id="menuArriba"> 
                    <img id="puntos" src="imagenes/mas.png" width=30px height=30px>
                    <div class="modalPuntos" id="modalPuntos">
                        <div class="logOut" id="logOut">
                            <img id="logoutIcon" class="logoutIcon" src="imagenes/logoutIcon.png" alt="Logout" width=30px height=30px>
                            <p> Cerrar sesión </p>
                        </div>
                        <span id="x" class="x">X</span>
                    </div>
                </div>
            </div>
            <form class="postPorPublicar" id="task-form">
                <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario' >
                <input id='description' class="inputPostPorPublicar" placeholder='¿En qué estás pensando?'>
                <button id='guardar' class="Publicar">Publicar</button>
            </form> 
            <div id='task-container'>
            </div>
            <div id="logoutQ" class="logoutQ">¿Quieres salir de Petsbook?</div>
    `;
div.innerHTML = templateHome;
//homeE();

const puntos = div.querySelector("#puntos");
const modalPuntos = div.querySelector("#modalPuntos");
const logOut = div.querySelector("#logOut")
const x = div.querySelector("#x")
const logoutQ = div.querySelector("#logoutQ")

puntos.addEventListener("click", function () {
 modalPuntos.style.display = "flex"
});

x.addEventListener("click", function (){
    modalPuntos.style.display = "none"
});

logOut.addEventListener("click", function (){
    logoutQ.style.display = "block"
})



    return div;
};

