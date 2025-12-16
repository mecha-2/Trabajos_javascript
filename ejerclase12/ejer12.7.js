let matriz = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10], 
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25],

]

let suma = 0; 

for(let fila = 0; fila < matriz.length; fila ++){
    for(let columna = 0; columna < matriz[fila].length; columna ++){
        let valor = matriz[fila][columna]; 
        suma += valor

    }
}

console.log("La suma de todos los valores de la matriz da un total de:", suma);