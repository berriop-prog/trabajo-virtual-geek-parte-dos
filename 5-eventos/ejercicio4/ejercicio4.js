'use strict';
/*Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript.*/
//  <button id="btn" class="button">Empezar</button>
//<ul id="list"> </ul>
const boton = document.querySelector('.boton');
const listado = document.querySelector('.listado');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const listadoadd = () => {
    listado.innerHTML =
        `
      <li id="una"> ${inception} </li>
      <li id="dos">${theButterFlyEffect}</li>
      <li id="tres">${eternalSunshineOfTheSM}</li>
      <li id="cuarto">${blueVelvet}</li>
      <li id="cinco">${split}</li>
    `;
    const primeraF = document.querySelector('#una');
    const segundaS = document.querySelector('#dos');
    const terceraT = document.querySelector('#tres');
    const cuartaC = document.querySelector('#cuatro');
    const quintaF = document.querySelector('#cinco');
    primeraF.addEventListener('click', first);
    segundaS.addEventListener('click', second);
    terceraT.addEventListener('click', third);
    cuartaC.addEventListener('click', fourth);
    quintaC.addEventListener('click', five);
}

boton.addEventListener('click', listadoadd);
const first = () => {
    console.log(`${inception}`);
}
const second = () => {
    console.log(`${theButterFlyEffect}`);
}
const third = () => {
    console.log(`${eternalSunshineOfTheSM}`);
}
const fourth = () => {
    console.log(`${blueVelvet}`);
}
const five = () => {
    console.log(`${split}`);
}