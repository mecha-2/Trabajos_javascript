const prompt = require('prompt-sync')();

//pedimos al usuario que ingrese un numero cualquiera
let numero = parseFloat (prompt("Ingrese un numero: "));

//calculamos el doble del numero ingresado
let dobleNumero = numero * 2;

//mostramos el resultado en la terminal
console.log("El doble de tu numero ingresado es:" + dobleNumero);
