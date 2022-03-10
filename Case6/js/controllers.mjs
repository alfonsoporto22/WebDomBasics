import { getTasks, setTasks } from "./models.mjs";

export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            li.innerText = item.description;
            if (item.completed) li.classList.add("completed")
            return li;
        }
    )
    const htmlParent = document.querySelector("#taskList")
    htmlParent.innerHTML = "";
    htmlParent.append(...HTMLElements);
}

export function removeCompletedHandler (event) {
    let tasks = getTasks();
    tasks = tasks.filter(
        (item) => {
            return ! item.completed
        }
    )
    setTasks(tasks)
    dataToHTMLList(tasks)
}
