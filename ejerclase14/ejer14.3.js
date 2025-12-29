const prompt = require("prompt-sync")(); 
// Solicitar la edad del usuario
let edad = parseInt(prompt("Ingresa tu edad:"));

// Función flecha para clasificar la edad
const clasificarEdad = (edad) => {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto Mayor";
    } else {
        return "Edad no válida";
    }
};

// Clasificar y mostrar el resultado
const resultado = clasificarEdad(edad);
console.log("La clasificación de edad es: "+ resultado +".");