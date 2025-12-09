const prompt = require('prompt-sync')();

//Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese
//el precio original y el porcentaje de descuento, y muestra el precio final.
let precioOriginal = parseFloat(prompt("Ingrese el precio original de su producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento de ese producto: "));
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

console.log("Al revisar el prescio original de su producto, agregando el porcentaje de descuento su precio final es "+ precioFinal +".");
