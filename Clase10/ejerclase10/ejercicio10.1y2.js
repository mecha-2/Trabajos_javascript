// 1- Declarar dos variables: una con el nombre edad y la otra con el nombre peso. Después deberás asignarle un valor.
const prompt = require('prompt-sync')();

let edad = parseFloat(prompt("Ingresa tu edad: "));
let peso = parseFloat(prompt("Ingresa tu peso: "));

// 2- Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje
//personalizado que incluya toda esta información.(ya se hizo peso y edad en parte 1)
let nombre = prompt("Ingresa tu nombre: ");

console.log("Hola "+ nombre +"! Tu edad es "+ edad +" y tu peso es "+ peso +".");