const prompt = require('prompt-sync')();

const convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
};

console.log("--- Ejercicio 8: Conversor de Temperatura ---");

let gradosC = parseFloat(prompt("Ingresá la temperatura en Celsius: "));

let resultadoF = convertirCelsiusAFahrenheit(gradosC);

console.log(gradosC + "°C equivalen a " + resultadoF + "°F");