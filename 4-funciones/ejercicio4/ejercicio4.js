'use strict';
/* En CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.
La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.*/

function widhtContentBox(borderBox, width, padding, border) {
    if (borderBox) {
        console.log(`El ancho del contenido es: ${width}px`);
    } else {
        console.log(`El ancho del total de la caja es: ${width + padding + border}`);
    }
}
widhtContentBox(false, 25, 25, 10);