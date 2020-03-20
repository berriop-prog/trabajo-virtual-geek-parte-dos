'use strict';
/*Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
En el li añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.*/


const johnDoe = document.querySelector('.teacher--johnDoe');
const joe = document.querySelector('.teacher--joe');
const jane = document.querySelector('.teacher--jane');

function faveTeacher(event) {
    const chosenTeacher = event.currentTarget;
    if (chosenTeacher.classList.contains('teacher--selected')) {
        chosenTeacher.classList.remove('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        chosenTeacher.classList.add('teacher--selected');
        chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    }
}

johnDoe.addEventListener('click', faveTeacher);
joe.addEventListener('click', faveTeacher);
jane.addEventListener('click', faveTeacher);