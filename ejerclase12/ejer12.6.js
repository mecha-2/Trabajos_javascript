let matriz = [
    [10, 3, 2, 1, 4, 7], 
    [5, 5, 10, 100, 4], 
    [5, 125, 10, 1020, 4], 
    [5, 5, 5097, 100, 4]
]; 

let suma = 0; 

for(let fila = 0; fila < matriz.length; fila ++ ){
    for(let columna = 0; columna < matriz[fila].length; columna ++){
        let valor = matriz[fila][columna]; 
        if(valor >= 10 && valor < 1000){
            suma += valor; 
        }
    }
}

console.log("La suma de estos valores da un total de:", suma);