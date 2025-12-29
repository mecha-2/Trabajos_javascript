const prompt = require('prompt-sync')();

const calcularFactorial = function(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i; 
    }
    return resultado;
};

console.log("--- Ejercicio 10: Factorial ---");

let numFactorial = parseInt(prompt("Ingresá un número para calcular su Factorial (!): "));

console.log("El factorial de " + numFactorial + " es: " + calcularFactorial(numFactorial));