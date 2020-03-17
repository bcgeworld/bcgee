var patientModal = document.getElementById("printmodal");

var printerbtn = document.getElementById("printerbtn");

printerbtn.onclick = function() {
    patientModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
}

//delete modal
var patientdModal = document.getElementById("deletemodal");

var deletebtn = document.getElementById("deletebtn");

deletebtn.onclick = function() {
    patientdModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
    if (event.target == patientdModal) {
        patientdModal.style.display = "none";
    }
}


//savemodal

var savemodal = document.getElementById("saveModal");

var cancelModal = document.getElementById("cl-button");


cancelModal.onclick = function() {
    savemodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}