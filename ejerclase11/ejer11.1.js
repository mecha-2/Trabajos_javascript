const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número cualquiera: "));

let mensaje = (numero > 0) ? "El numero es positivo." : (numero < 0) ? "El número es negativo." : "Es igual a cero";

console.log(mensaje);
