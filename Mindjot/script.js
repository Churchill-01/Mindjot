let myNotes = JSON.parse(localStorage.getItem("myNotes")) || [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const popup = document.getElementById("popup");

if (inputBtn && inputEl) {
    inputBtn.addEventListener("click", function () {
        if (inputEl.value !== "") {
            myNotes.push(inputEl.value);
            inputEl.value = "";
            localStorage.setItem("myNotes", JSON.stringify(myNotes));
            renderValue();
            showPopup();
        }
    });
}

if (inputEl) {
    inputEl.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
}

if (ulEl) {
    renderValue();
}

if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
        localStorage.clear(myNotes);
        myNotes = [];
        renderValue();
    });
}

function renderValue() {
    if (!ulEl) return;
    let listItems = "";
    for (let i = 0; i < myNotes.length; i++) {
        listItems += `<li>${myNotes[i]}</li>`;
    }
    ulEl.innerHTML = listItems;
}

function showPopup() {
    if (!popup) return;
    popup.classList.add("show");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}