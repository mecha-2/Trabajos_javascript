const prompt = require('prompt-sync')();

const concatenarNombres = function(nombre, apellido) {
    return nombre + " " + apellido;
};

console.log("--- Ejercicio 5: Nombre Completo ---");

let Nombre = prompt("Ingresá tu nombre: ");
let Apellido = prompt("Ingresá tu apellido: ");

let nombreCompleto = concatenarNombres(Nombre, Apellido);

console.log("Nombre completo: " + nombreCompleto);