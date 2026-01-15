let estudiante = {
    nombre: "Melina",
    edad: 25,
    notas: [8, 7, 9, 6, 10]
}

function procesarEstudiante(estudiante) {

    estudiante.notas.push(9)

    estudiante.notas.shift()

    let suma = estudiante.notas.reduce((acum, nota) => acum + nota, 0)

    let promedio = suma / estudiante.notas.length

    let nombreMayusculas = estudiante.nombre.toUpperCase()

    return {
        nombre: nombreMayusculas,
        promedio: promedio
    }
}

console.log(procesarEstudiante(estudiante))