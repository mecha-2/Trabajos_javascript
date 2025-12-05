//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
//Muestra un mensaje personalizado según el caso.
const prompt = require('prompt-sync')();

//pedir al usuario que ingrese su edad
let edad = prompt("Por favor, ingresa tu edad: ");

//verificar si la edad es un numero valido
if (!isNaN(edad)){
}
//verificar si la es mayor o menor de edad
if (edad >= 18){
    console.log("Eres mayor de edad!");
} else if (edad <= 18){
    console.log("Eres menor de edad!");
} else {
    console.log("Por favor ingresa un número válido para la edad.");
}