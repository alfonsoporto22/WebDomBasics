import runners from "./models/runners.mjs"
import { dataToHTMLList } from "./controllers/runners.mjs";

const boton=document.querySelector("boton");

    dataToHTMLList(runners);
