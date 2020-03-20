'use strict';
/*a refactorizar el EJERCICIO 4 para mejorarlo utilizando la técnica event delegation. Tenemos que quitar ese mogollón de listeners en los lis y reemplazarlos por uno solo en la etiqueta madre (ul)*/
const button = document.getElementById('start');
button.addEventListener('click', () => document.querySelector('ul').innerHTML = '<li id="One" onclick="primera()">Inception</li><li onclick="segunda()">The butterfly effect</li><li onclick="tercera()">Eternal sunshine of the spotless mind</li><li onclick="cuarta()">Blue velvet</li><li onclick="quinta()">Split</li>'
);

function primera() {
    document.getElementById('movie').innerHTML = "Inception";
    console.log("Inception");
}

function segunda() {
    document.getElementById('movie').innerHTML = "The butterfly effect";
    console.log("The butterfly effect");
}

function tercera() {
    document.getElementById('movie').innerHTML = "Eternal sunshine of the spotless mind";
    console.log("Eternal sunshine of the spotless mind");
}

function cuarta() {
    document.getElementById('movie').innerHTML = "Blue velvet";
    console.log("Blue velvet");
}

function quinta() {
    document.getElementById('movie').innerHTML = "Split";
    console.log("Split");
}