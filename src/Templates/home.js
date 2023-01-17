export const templateHome = `
            <div id="cabeza">
                <div class='head'><img id= "logoDeVistaHome" src="imagenes/Logo.png" width=50px>
                    <span id="etsbook">ETSBOOK</span>
                    <p id="nomb-obte"></p>
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
            <div id= "logoutQContainer" class="logoutQContainer"></div>
                <div id="logoutQ" class="logoutQ">
                    <p id="xSalir" class="xSalir"> X </p>
                    <p id="Q" class="Q"> ¿Quieres salir de Petsbook? </p>
                    <button id="logoutBtn" class="logoutBtn">Cerrar sesión</button>
                </div>
            </div>

            <div class="footerDeHome">
             <div class = "divIconoHome">
             <img class="iconHome" src="imagenes/home.png" width=25px alt='foto del usuario'>
             </div>
             <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
           </div>


         <div id="modal-editar">
         <div id="modal-central-editar">
         <p id="equis">X</p>
         <p id="pregunta" class="Q">¿Deseas editar este post?</p>
         <button id="edtbtn>Editar</button>
         </div>
         </div>
    `;
