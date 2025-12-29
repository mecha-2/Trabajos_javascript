const prompt = require ('prompt-sync')();

//pedimos al usuarioque ingrese su nombre 
let nombre = prompt ("¿Cómo te llamas?");

//mostramos el saludo personalizado
console.log("Hola, " + nombre + " ¿Que onda?.");
