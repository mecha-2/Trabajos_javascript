const prompt = require('prompt-sync')();

//pide al usuario que ingrese peso y altura y muestra el IMC calculado.
let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = peso / (altura * altura);

//Cálculo IMC
console.log("Teniendo los datos de su altura y peso, podemos calcular que su IMC es igual a "+ imc +".");
