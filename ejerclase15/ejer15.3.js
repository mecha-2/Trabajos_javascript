let mascotas = ["Perro", "Gato", "Conejo"];

mascotas.unshift("Hámster");

let atendido = mascotas.shift();

console.log("Mascota atendida: " + atendido);

console.log("Fila actual: " + mascotas);