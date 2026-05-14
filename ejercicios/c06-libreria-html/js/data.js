// Elementos del DOM

const input = document.getElementById("inputBusqueda");
const boton = document.getElementById("btnBuscar");
const contenedor = document.getElementById("resultados");


// Fetch Open Library

const buscarLibros = async (query) => {

  try {

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Error en la API");
    }

    const data = await response.json();

    return data.docs;

  } catch (error) {

    throw error;
  }
};


// Renderizar resultados

const renderResultados = (libros) => {

  contenedor.innerHTML = "";

  const primeros10 = libros.slice(0, 10);

  primeros10.forEach((libro) => {

    // columna bootstrap

    const col = document.createElement("div");
    col.className = "col-md-4";


    // card

    const card = document.createElement("div");
    card.className = "card h-100 shadow";


    // imagen

    const img = document.createElement("img");

    if (libro.cover_i) {

      img.src =
        `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`;

    } else {

      img.src =
        "https://via.placeholder.com/300x400?text=Sin+Imagen";
    }

    img.className = "card-img-top";


    // body

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";


    // titulo

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = libro.title;


    // autor

    const autor = document.createElement("p");
    autor.className = "card-text";

    autor.textContent = libro.author_name
      ? `Autor: ${libro.author_name[0]}`
      : "Autor: Desconocido";


    // año

    const anio = document.createElement("p");
    anio.className = "card-text text-muted";

    anio.textContent = libro.first_publish_year
      ? `Año: ${libro.first_publish_year}`
      : "Año: Desconocido";


    // boton

    const botonVer = document.createElement("a");

    botonVer.href = "libro.html";
    botonVer.className = "btn btn-primary";
    botonVer.textContent = "Ver más";


    // append

    cardBody.appendChild(titulo);
    cardBody.appendChild(autor);
    cardBody.appendChild(anio);
    cardBody.appendChild(botonVer);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);

    contenedor.appendChild(col);
  });
};


// Mostrar error

const mostrarError = (mensaje) => {

  contenedor.innerHTML = "";

  const p = document.createElement("p");

  p.textContent = mensaje;

  p.className = "text-danger";

  contenedor.appendChild(p);
};


// Evento buscar

boton.addEventListener("click", async () => {

  const texto = input.value.trim();

  if (texto === "") {

    mostrarError("Por favor ingresá un libro");

    return;
  }

  try {

    const libros = await buscarLibros(texto);

    renderResultados(libros);

  } catch (error) {

    mostrarError("Error al buscar libros");
  }
});