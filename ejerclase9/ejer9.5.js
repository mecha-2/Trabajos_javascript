//Escribe un programa que pida al usuario que ingrese tres números y determine
//cuál es el mayor de los tres.
const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
let numero3 = parseInt(prompt("Ingresa el tercer número: "));

if(numero1 >= numero2 && numero1 >= numero3){
    console.log("El primer número ingresado (" + numero1 + ") es el mayor.");
} else if(numero2 >= numero1 && numero2 >= numero3){
    console.log("El segundo número ingresado (" + numero2 + ") es el mayor.");
} else if(numero3 >= numero1 && numero3 >= numero2){
    console.log("El tercer número ingresado (" + numero3 + ") es el mayor.");
}