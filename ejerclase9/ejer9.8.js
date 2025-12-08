const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Lado A: "));
let lado2 = parseFloat(prompt("Lado B: "));
let lado3 = parseFloat(prompt("Lado C: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Es Equilátero (3 lados iguales).");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Es Isósceles (2 lados iguales).");
} else {
    console.log("Es Escaleno (ningún lado igual).");
}