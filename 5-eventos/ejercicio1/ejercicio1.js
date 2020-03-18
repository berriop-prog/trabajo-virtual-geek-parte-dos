'use strict';
/*Crear una página HTML con un párrafo en el que ponga Hola y un botón. Usando JavaScript, cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!" cuando se pulse el botón.*/

const button = document.querySelector('.button');
const text = document.querySelector('.saludo');

const showAlert = () => {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió! ';
}

button.addEventListener('click', showAlert);