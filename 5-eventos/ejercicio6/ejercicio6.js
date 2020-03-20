'use strict';
/*Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado (directamente sobre el elemento document). En el evento podemos consultar la propiedad key para saber qué tecla se ha pulsado.*/
/* EN EL HTML
<body>
    <div id="pantalla" class="window"></div>
    <button id="boton" class="button">Boton</button>
    <script src="./ejercicio6.js"></script>
</body> */

const div = document.querySelector('.div');
var letra;

const changeClass = (event) => {
    letra = event.keyCode;

    if (letra == 114) {
        div.classList.add('fondo-rojo');
        div.classList.remove('fondo-morado');
    }
    else if (letra == 109) {
        div.classList.add('fondo-morado');
        div.classList.remove('fondo-rojo');
    }
}

div.addEventListener('keypress', changeClass);




/*var pintar = document.getElementById('#pantalla');
function cambiarColor() {
    console.log('presión');
    var bg = window.styleMedia.background;
    if (bg == 'r') {
        window.styleMedia.background = "red";
    } else if (bg == 'm') {
        window.styleMedia.background = "purple";
    }
    return true;
}*/





/*const pintar = document.getElementById('#pantalla')

//primero las constantes que llaman al id
window.addEventListener('keypress', () => {

    function ckeckKeyPress(key) {
        if (key.KeyCode == '82') {
            pintar.classList.add('red');
        } else if (key.KeyCode == '77') {
            pintar.classList.add('purple');
        }
    }
}); */