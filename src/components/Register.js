import { onNavigate } from "../main.js";

export const Register = () => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const button = document.createElement("button");
    const buttonBack = document.createElement("button");
    const inputEmail = document.createElement("input");
    const inputPass = document.createElement("input");


    button.textContent = "Entrar";
    buttonBack.textContent = "Regresar";
    title.textContent = "Regístrate"

    button.addEventListener("click", () =>{
        onNavigate("/welcome");
    });
    buttonBack.addEventListener("click", () =>{
        onNavigate("/");
    });


    div.append(title, inputEmail, inputPass, button, buttonBack);

    return div;
}; 