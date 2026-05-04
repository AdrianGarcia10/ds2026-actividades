"use strict";
// Función async con fetch
const obtenerUsuarios = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Validación de respuesta HTTP
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        // Tipado de la respuesta
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};
// Función principal
const init = async () => {
    const usuarios = await obtenerUsuarios();
    usuarios.forEach(({ name, email }) => {
        console.log(`Nombre: ${name} - Email: ${email}`);
    });
};
// Ejecución
init();
