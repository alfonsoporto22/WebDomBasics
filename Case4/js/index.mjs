function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

const boton=document.querySelector("#boton");

boton.addEventListener(
    "click",
    (event) => {
        toggleShowCompletedHandler(event);
    }
);