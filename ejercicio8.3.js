const prompt = require ('prompt-sync')();

//pedimos al usuario que ingrese dos numeros
let primerNum = parseFloat(prompt("Ingrese el primer número: "));
let segundoNum = parseFloat(prompt("Ingrese el segundo número: "));

//calculo de la suma de ambos números
let suma = primerNum + segundoNum;

//mostrar el resultado de la suma de la consola
console.log("La suma de los números es: " + suma);
