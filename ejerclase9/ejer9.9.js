const prompt = require('prompt-sync')();

const PI = 3.14159;
let radio = parseFloat(prompt("Ingrese el radio: "));
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

console.log("El área es: " + area);
console.log("El perímetro es: " + perimetro);