const prompt = require('prompt-sync')();

//Declarando las 4 variables del ejercicio 4
let verdadero = true;
let texto = "Hola, ¿Cómo va todo?";
let numero = 13;
let nada = null;

 //Operaciones y validaciones:
let suma = numero + 7;
console.log("Resultado de la suma", suma);

let mensaje = texto + " Espero que bien.";
console.log(mensaje);

if (verdadero){
    console.log("La variable es true.");
}else{
    console.log("La variable es false.");
}

if (nada === null){
    console.log("La variable es null.");
}