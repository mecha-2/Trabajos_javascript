//declara dos variables booleanas condicion 1 y condicion2. 
//Pide al  usuario que ingrese dos valores booleanos (true o false) 
//y muestra el resultado de diversas combinaciones lógicas.
const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingrese el primer valor booleano(true o false): ") === 'true';
let condicion2 = prompt("Ingrese el segundo valor booleano(true o false): ") === 'true';

console.log("---Resultados lógicos---");
console.log("AND (&&): " + (condicion1 && condicion2)); //ambas deben ser verdaderas
console.log("OR (||): " + (condicion1 || condicion2)); //una tiene que ser verdadera
console.log("NOT condicion1 (!): " + (!condicion1)); //invierte el valor.

