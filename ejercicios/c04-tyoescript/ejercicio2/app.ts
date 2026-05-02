interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "1", titulo: "Libro A", autor: "Autor1", precio: 1000, disponible: true },
    { isbn: "2", titulo: "Libro B", autor: "Autor2", precio: 2000, disponible: false },
    { isbn: "3", titulo: "Libro C", autor: "Autor1", precio: 1500, disponible: true }
];

// Buscar por autor
function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(libro =>
        libro.autor.toLowerCase().includes(autor.toLowerCase())
    );
}

// Libros disponibles
function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

// Precio promedio
function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;

    let suma: number = 0;

    for (const libro of libros) {
        suma += libro.precio;
    }

    return suma / libros.length;
}

// Renderizar en HTML
function renderizar(libros: Libro[]): void {
    const listado = document.getElementById("listado") as HTMLElement;
    const stats = document.getElementById("stats") as HTMLElement;

    listado.innerHTML = "";

    for (const libro of libros) {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio}`;
        listado.appendChild(li);
    }

    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros)}`;
}

// Botones
const input = document.getElementById("filtroAutor") as HTMLInputElement;
const btnFiltrar = document.getElementById("filtrar") as HTMLElement;
const btnDisponibles = document.getElementById("mostrarDisponibles") as HTMLElement;
const btnTodos = document.getElementById("mostrarTodos") as HTMLElement;

btnFiltrar.addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});

btnDisponibles.addEventListener("click", () => {
    renderizar(librosDisponibles());
});

btnTodos.addEventListener("click", () => {
    renderizar(catalogo);
});

// Mostrar al cargar
renderizar(catalogo);