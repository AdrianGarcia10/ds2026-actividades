interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

let catalogo: Libro[] = [
    { isbn: "1", titulo: "Libro A", autor: "Autor1", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Autor2", precio: 2000, disponible: false }
];

//  Agregar libro
function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}

// Eliminar libro
function eliminarLibro(isbn: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbn);
    renderizar(catalogo);
}

// Validar formulario
function validarFormulario(): Libro | null {
    const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    const autor = (document.getElementById("autor") as HTMLInputElement).value;
    const precioStr = (document.getElementById("precio") as HTMLInputElement).value;
    const genero = (document.getElementById("genero") as HTMLInputElement).value;

    const errorDiv = document.getElementById("errorForm") as HTMLElement;

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
function renderizar(libros: Libro[]): void {
    const listado = document.getElementById("listado") as HTMLElement;
    const stats = document.getElementById("stats") as HTMLElement;

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
const btnAgregar = document.getElementById("agregar") as HTMLElement;

btnAgregar.addEventListener("click", () => {
    const libro = validarFormulario();

    if (libro === null) return;

    agregarLibro(libro);

    // limpiar formulario
    (document.getElementById("titulo") as HTMLInputElement).value = "";
    (document.getElementById("autor") as HTMLInputElement).value = "";
    (document.getElementById("precio") as HTMLInputElement).value = "";
    (document.getElementById("genero") as HTMLInputElement).value = "";
});


renderizar(catalogo);