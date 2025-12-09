const prompt = require('prompt-sync')();

//Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit
let celsius = parseFloat(prompt("Ingrese una temperatura en grados Celsius. "));
let fahrenheit = celsius * 9 / 5 + 32;

//Mostrar la conversión
console.log("La temperatura en Celsius dada ("+ celsius +") convertida a Fahrenheit es "+ fahrenheit +".");