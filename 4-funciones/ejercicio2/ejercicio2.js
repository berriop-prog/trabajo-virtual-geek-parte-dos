'use strict';
/* Crea una función que reciba 4 parámetros, cada uno con un número, y devuelva como valor la media de todos ellos*/

function media(a, b, c, d) {
    const resultado = ((a + b + c + d) / 4);

    return resultado;
}

console.log('La media es: ' + media(3, 16, 4, 12));
console.log('La media es: ' + media(19, 10, 15, 27));
console.log('La media es: ' + media(17, 3, 44, 38));