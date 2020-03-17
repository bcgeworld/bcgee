let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}



function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";


    monthAndYear.innerHTML = months[month] + " " + year;


    let date = 1;
    for (let i = 0; i < 6; i++) {

        let row = document.createElement("tr");


        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);

            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}

//date
$(document).ready(function () {
    // $("#start_date").datepicker();
    // $("#date1").click(function () {
    //     $("#start_date").focus();
    //     $('#start_date').date("DateTimePicker").show();
    // });

    // $('#start_date').click(function(event){
    //     $('#start_date').date("DateTimePicker").show();
    //  });

    $('#date1').click(function () {
        $(".calendar").removeClass('hidden').addClass('show');
    })
    $("#start_date").click(function () {
        $(".calendar").removeClass('show').addClass('hidden');
    });
    
    $('#date2').click(function () {
        $(".calendar").removeClass('hidden').addClass('show');
    })
    $("#end_date").click(function () {
        $(".calendar").removeClass('show').addClass('hidden');
    });
});


// Appm Modal

var appmmodal = document.getElementById("appmModal");

var printerbtn = document.getElementById("printerbtn");

printerbtn.onclick = function () {
    appmModal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == appmmodal) {
        appmmodal.style.display = "none";
    }
}
