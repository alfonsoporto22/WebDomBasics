import { getTasks } from "./models.mjs";
import { removeCompletedHandler, dataToHTMLList } from "./controllers.mjs";

dataToHTMLList(getTasks())