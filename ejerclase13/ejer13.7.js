let horaActual = 14; 

function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días ☀️"); 
    } else if (horaActual < 18) {
        console.log("Buenas tardes 🌤️"); 
    } else {
        console.log("Buenas noches 🌙"); 
    }
}

console.log("--- Ejercicio 7: Saludo ---");
console.log("Hora actual simulada: " + horaActual);

mostrarSaludo();