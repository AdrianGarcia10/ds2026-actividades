"use strict";
// Elementos del DOM
const contenedor = document.getElementById("contenedor");
// Fetch de usuarios
const obtenerUsuarios = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Error en la API");
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        throw error;
    }
};
// Renderizar usuarios en HTML
const renderUsuarios = (usuarios) => {
    const ul = document.createElement("ul");
    usuarios.forEach(({ name, email }) => {
        const li = document.createElement("li");
        li.textContent = `${name} - ${email}`;
        ul.appendChild(li);
    });
    contenedor.appendChild(ul);
};
// Mostrar cargando
const mostrarLoading = () => {
    const p = document.createElement("p");
    p.textContent = "Cargando...";
    contenedor.appendChild(p);
    return p;
};
// Mostrar error
const mostrarError = () => {
    const p = document.createElement("p");
    p.textContent = "Ocurrió un error al cargar los usuarios";
    p.style.color = "red";
    contenedor.appendChild(p);
};
// Función principal
const init = async () => {
    const loading = mostrarLoading();
    try {
        const usuarios = await obtenerUsuarios();
        contenedor.removeChild(loading);
        renderUsuarios(usuarios);
    }
    catch (error) {
        contenedor.removeChild(loading);
        mostrarError();
    }
};
// Ejecución
init();
