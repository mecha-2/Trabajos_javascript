const prompt = require('prompt-sync')();

let entrada = prompt("Ingresá los nombres separados por comas: ");

function transformarYAnalizarNombres(entrada) {

    let nombres = entrada.split(",")

    let nombresLimpios = nombres.map(nombre => nombre.trim())

    let existeJuan = nombresLimpios.includes("Juan")

    let nombresModificados = nombresLimpios.map(nombre => {
        if (nombre === "María") {
            return "Ana"
        } else {
            return nombre
        }
    })

    let indicePedro = nombresModificados.indexOf("Pedro")

    let nombresOrdenados = nombresModificados.sort().join(".")

    console.log("¿Existe Juan?:", existeJuan)
    console.log("Índice de Pedro:", indicePedro)
    console.log("Nombres finales:", nombresOrdenados)
}

transformarYAnalizarNombres(entrada)