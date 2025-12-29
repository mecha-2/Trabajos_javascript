let deportista = {
    nombre: "Messi",
    energia: 100, 
    experiencia: 10,
    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    }
};

console.log("Energía inicial: " + deportista.energia);
console.log("Experiencia inicial: " + deportista.experiencia);


console.log("--- Después de entrenar 2 horas ---");

console.log("Energía final: " + deportista.energia);
console.log("Experiencia final: " + deportista.experiencia);