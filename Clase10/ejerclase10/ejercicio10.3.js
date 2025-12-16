// 3- Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima.
const prompt = require('prompt-sync')();

const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA){
    console.log("Su edad está dentro del rango permitido:");
}else {
    console.log("Su edad no está dentro del rango adecuado.");
}