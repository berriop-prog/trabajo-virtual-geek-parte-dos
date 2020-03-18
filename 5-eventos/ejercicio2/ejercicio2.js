'use strict';
/*Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola ', con el nombre que aparece en el input de texto. */
const input = document.querySelector('.input')
const button = document.querySelector('.button');
const texto = document.querySelector('.texto');

const showAlert = () => {
    texto.innerHTML = 'Hola ' + input.value;
}

button.addEventListener('click', showAlert);