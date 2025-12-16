const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

let mensaje = (numero % 2 === 0) ? "El número es par" : "El número es impar";
console.log(mensaje);
