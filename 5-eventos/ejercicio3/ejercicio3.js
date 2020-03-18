'use strict'; 
/*Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.*/

const text = document.querySelector('.parrafo');

text.addEventListener('mouseover' , ()=> {
    document.querySelector('div').innerHTML='<p class="parr">Cras sed congue leo. Sed at accumsan tortor. Donec varius, ex ut semper pretium, ante dolor hendrerit velit, eget sagittis ipsum tellus ac nulla.</p>'
})

const showAlert = () => {
    text.innerHTML = 'Mi primer clic';
}

button.addEventListener('mouseover', showAlert);