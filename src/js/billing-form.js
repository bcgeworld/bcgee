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


var paymodal = document.getElementById("payModal");

var cnlModal = document.getElementById("payNow");


cnlModal.onclick = function () {
    paymodal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == paymodal) {
        paymodal.style.display = "none";
    }

}