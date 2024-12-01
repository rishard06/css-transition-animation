console.log("hello")

const dropList = document.querySelector(".dropdown-menu")

function toggleShow () {
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.backdrop');

    modal.classList.toggle("show");
    backdrop.classList.toggle("show");
}

document.body.addEventListener('click', (e) => {
    if(e.target.className === "modal-btn") {
        toggleShow();
    }
    if(e.target.className === "modal-close") {
        toggleShow();
    }
    if(e.target.className === "dropdown") {
        dropList.classList.toggle("visible")
    }
})

