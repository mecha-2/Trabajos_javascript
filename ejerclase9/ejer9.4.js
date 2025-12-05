//Declara una variable nombre y pide al usuario que ingrese su nombre.
//verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

//pedir al usuario que ingrese su nombre
let nombre = prompt("Por favor, ingresa tu nombre: ");

//Nombre con el que queremos comparar
const miNombre = "Melina";

//verificar si el nombre ingresado es igual al especificado
if (nombre === miNombre) {
    console.log("Hola " + nombre + " ¡Que bueno verte!");
} else {
    console.log("Hola " + nombre + " ¡Tu nombre es diferente al mío!");
}