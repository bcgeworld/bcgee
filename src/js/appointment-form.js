var savemodal = document.getElementById("saveModal");

var cancelModal = document.getElementById("cl-button");


cancelModal.onclick = function () {
    savemodal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}