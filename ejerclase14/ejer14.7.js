let libro1 = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anioPublicacion: 1943
};

let libro2 = {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    anioPublicacion: 1997
};

function mostrarLibro(libros) {
    for (let i = 0; i < libros.length; i++) {
        console.log("Título: " + libros[i].titulo + ", Autor: " + libros[i].autor + ", Año: " + libros[i].anioPublicacion);
    }
}

let biblioteca = [libro1, libro2];

mostrarLibro(biblioteca);