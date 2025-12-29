let modelosAutos = ["Fiat", "Ford", "Chevrolet", "Ford", "Toyota", "Ford", "Audi"];

function ultimaAparicionModeloAuto(modelo) {
    let posicion = -1;
    for (let i = 0; i < modelosAutos.length; i++) {
        if (modelosAutos[i] === modelo) {
            posicion = i + 1;
        }
    }
    
    if (posicion !== -1) {
        console.log("El modelo " + modelo + " está en la posición: " + posicion);
    } else {
        console.log("El modelo no está presente");
    }
}

ultimaAparicionModeloAuto("Ford");