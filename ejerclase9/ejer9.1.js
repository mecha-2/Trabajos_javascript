//Declara dos variables numericas numero1 y numero2. Pide al usuario que ingrese dos numeros
//y muestra cual es mayor o si son iguales. 
const prompt = require('prompt-sync')();

let primerNum = parseFloat(prompt("Ingrese el primer número: "));
let segundoNum = parseFloat(prompt("Ingrese el segundo número: "));

if (primerNum > segundoNum){
    console.log("El primer número (" + primerNum + ") es mayor al segundo número.");
} else if (segundoNum > primerNum){
    console.log("El segundo número (" + segundoNum + ") es mayor al primer número.");
} else {
    console.log("Los números son iguales.")
}