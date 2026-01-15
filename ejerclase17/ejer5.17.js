let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

function procesarFrases(frases) {

    let frasesModificadas = frases.map(frase => {

        let fraseMinuscula = frase.toLowerCase()

        let palabras = fraseMinuscula.split(" ")

        let palabrasNuevas = palabras.map(palabra => {
            if (palabra === "malo") {
            } else {
            }
        })
        return palabrasNuevas.join(" ")
    })
    return frasesModificadas
}

console.log(procesarFrases(frases))