//Define dos constantes RANGO_MINIMO y RANGO_MAXIMO, con valores numericos de tu elección
//pide al usuario que ingrese un numero y verifique si esta dentro del rango definido por las constantes.
const prompt = require('prompt-sync')();

const RANGO_MINIMO = 13;
const RANGO_MAXIMO = 30;

let numeroUsuario = parseFloat(prompt("Ingresa un número para verificar el rango: "));

if (numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){
    console.log("El número está dentro del rango.");
} else {
    console.log("La próxima será, el número está fuera de rango.");
}