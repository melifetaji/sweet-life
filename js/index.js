// Changing year in footer

var year = new Date().getFullYear();

var date = `&copy; Meli Fetaji ${year}. All Rights Reserved`;

document.getElementById("date").innerHTML = date;
