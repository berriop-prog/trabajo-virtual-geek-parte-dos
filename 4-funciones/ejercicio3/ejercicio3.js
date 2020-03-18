'use strict';
/*Crea una función que reciba como parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1". */


function precio(p) {
    const iva = p * 0.21;
    const total = iva + p;
    const result = "Precio sin IVA: " + p + " IVA: " + iva + " y Total: " + total;
    return result;
}

console.log(precio(10));