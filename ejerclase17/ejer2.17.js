const prompt = require('prompt-sync')();

let oracion = prompt("Ingresá una oración: ");

function procesarOracion(oracion) {

    let oracionLimpia = oracion.trim()

    let palabras = oracionLimpia.split(" ")

    let oracionModificada = oracionLimpia.replace(/a/g, '@')

    let posicionJavascript = oracionLimpia.indexOf("javascript")

    let oracionConGuiones = palabras.join("-")

    console.log("Oración modificada:", oracionModificada)
    console.log("Posición de 'javascript':", posicionJavascript)
    console.log("Oración con guiones:", oracionConGuiones)
}

procesarOracion(oracion)