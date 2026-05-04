"use strict";
// Elementos del DOM
const input = document.getElementById("inputBusqueda");
const boton = document.getElementById("btnBuscar");
const contenedor = document.getElementById("resultados");
// Fetch a Open Library
const buscarLibros = async (query) => {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        if (!response.ok) {
            throw new Error("Error en la API");
        }
        const data = await response.json();
        return data.docs;
    }
    catch (error) {
        throw error;
    }
};
// Renderizar resultados
const renderResultados = (libros) => {
    contenedor.innerHTML = "";
    const primeros10 = libros.slice(0, 10);
    primeros10.forEach((libro) => {
        const card = document.createElement("div");
        const titulo = document.createElement("h3");
        titulo.textContent = libro.title;
        const autor = document.createElement("p");
        autor.textContent = libro.author_name
            ? `Autor: ${libro.author_name[0]}`
            : "Autor: Desconocido";
        const anio = document.createElement("p");
        anio.textContent = libro.first_publish_year
            ? `Año: ${libro.first_publish_year}`
            : "Año: Desconocido";
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(anio);
        contenedor.appendChild(card);
    });
};
// Mostrar error en pantalla
const mostrarError = (mensaje) => {
    contenedor.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.style.color = "red";
    contenedor.appendChild(p);
};
// Evento botón buscar
boton.addEventListener("click", async () => {
    const texto = input.value.trim();
    if (texto === "") {
        mostrarError("Por favor ingresá un término de búsqueda");
        return;
    }
    try {
        const libros = await buscarLibros(texto);
        renderResultados(libros);
    }
    catch (error) {
        mostrarError("Error al buscar libros");
    }
});
