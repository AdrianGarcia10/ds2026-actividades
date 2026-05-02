"use strict";
let catalogo = [
    { isbn: "1", titulo: "Libro A", autor: "Autor1", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Autor2", precio: 2000, disponible: false }
];
// Agregar libro
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
// Eliminar libro
function eliminarLibro(isbn) {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}
// Validar formulario
function validarFormulario() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const precioStr = document.getElementById("precio").value;
    const genero = document.getElementById("genero").value;
    const errorDiv = document.getElementById("errorForm");
    if (!titulo || !autor || !precioStr) {
        errorDiv.textContent = "Todos los campos obligatorios deben completarse";
        return null;
    }
    const precio = Number(precioStr);
    if (precio <= 0) {
        errorDiv.textContent = "El precio debe ser mayor a 0";
        return null;
    }
    errorDiv.textContent = "";
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible: true,
        genero
    };
}
// Renderizar
function renderizar(libros) {
    const listado = document.getElementById("listado");
    const stats = document.getElementById("stats");
    listado.innerHTML = "";
    for (const libro of libros) {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio}`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            eliminarLibro(libro.isbn);
        });
        li.appendChild(btnEliminar);
        listado.appendChild(li);
    }
    stats.textContent = `Cantidad: ${libros.length}`;
}
// Botón agregar
const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", () => {
    const libro = validarFormulario();
    if (libro === null)
        return;
    agregarLibro(libro);
    // limpiar formulario
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("genero").value = "";
});

renderizar(catalogo);
