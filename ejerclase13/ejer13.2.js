const prompt = require('prompt-sync')();

const encontrarMayor = function(num1, num2) {
    if (num1 > num2) {
        return num1; 
    } else if (num2 > num1) {
        return num2; 
    } else {
        return "Son iguales"; 
     }
};

console.log("--- Ejercicio 2: ¿Cuál es mayor? ---");

let n1 = parseFloat(prompt("Ingresá el primer número: "));
let n2 = parseFloat(prompt("Ingresá el segundo número: "));

console.log("El número mayor es: " + encontrarMayor(n1, n2));
