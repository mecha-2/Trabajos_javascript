let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";
    console.log("Adentro de la función veo: " + saludoGlobal);
    console.log("Adentro de la función veo: " + saludoLocal);
}

console.log("--- Ejercicio 3: Scope ---");

mostrarMensaje(); 

console.log("Afuera veo: " + saludoGlobal);

