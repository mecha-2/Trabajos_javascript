const prompt = require('prompt-sync')();

//declaracion y asignacion de variables
let primerNum = 13
let segundoNum = 24

//operaciones matemáticas
let resultadoSuma = primerNum + segundoNum;
let resultadoResta = primerNum - segundoNum;
let resultadoMultiplicacion = primerNum * segundoNum;
let resultadoDivision = primerNum / segundoNum;

//mostrar resultados
console.log("El resultado de la suma entre ("+ primerNum +") y ("+ segundoNum +") es "+ resultadoSuma +".");
console.log("El resultado de la resta entre ("+ primerNum +") y ("+ segundoNum +") es "+ resultadoResta +".");
console.log("El resultado de la multiplicacion entre ("+ primerNum +") y ("+ segundoNum +") es "+ resultadoMultiplicacion +".");
console.log("El resultado de la division entre ("+ primerNum +") y ("+ segundoNum +") es "+ resultadoDivision +".");
