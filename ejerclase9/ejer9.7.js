const prompt = require('prompt-sync')();

let pesoKg = parseFloat(prompt("Ingrese su peso en Kilogramos: "));

let conversion = pesoKg * 2.20462;

console.log("El peso en libras es: " + conversion);
