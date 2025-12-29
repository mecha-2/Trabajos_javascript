const prompt = require('prompt-sync')();

function convertirHorasAMinutos(horas) {
    return horas * 60; 
}

console.log("--- Ejercicio 6: Conversor de Horas ---");

let horasInput = parseFloat(prompt("Ingresá la cantidad de horas: "));

console.log("Son " + convertirHorasAMinutos(horasInput) + " minutos.");