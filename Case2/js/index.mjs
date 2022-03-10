
import {duplicate} from "./controllers/main.mjs";

const campo=document.querySelector("#campo");

const boton=document.querySelector("#boton");

boton.addEventListener(
    "click",
    (event) => {
        const valorOriginal=document.querySelector("#campo").value;
        let valorDevuelto=duplicate(valorOriginal);
        campo.value=valorDevuelto;
    }
);