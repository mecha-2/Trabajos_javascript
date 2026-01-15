let productos = [
    { nombre: "Picadillo", precio: 40 },
    { nombre: "Pan", precio: 35 },
    { nombre: "Jamón", precio: 55 },
    { nombre: "Salame", precio: 70 }
]

function gestionarProductos(productos) {

    productos.push({ nombre: "Huevos", precio: 60 })

    productos.pop()

    let indicePan = productos.findIndex(producto => producto.nombre === "Pan")

    let existePrecioMayor50 = productos.some(producto => producto.precio > 50)

    let nombresProductos = productos.map(producto => producto.nombre).join(", ")

    console.log("Índice del Pan:", indicePan)
    console.log("¿Hay precio mayor a 50?:", existePrecioMayor50)
    console.log("Lista de productos:", nombresProductos)
}

gestionarProductos(productos)