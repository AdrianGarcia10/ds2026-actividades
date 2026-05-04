//datos de usuario
interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}


// Elementos del DOM

const contenedor = document.getElementById("contenedor") as HTMLDivElement;


// Fetch de usuarios

const obtenerUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error en la API");
    }

    const usuarios: Usuario[] = await response.json();
    return usuarios;

  } catch (error) {
    throw error;
  }
};


// Renderizar usuarios en HTML

const renderUsuarios = (usuarios: Usuario[]): void => {
  const ul = document.createElement("ul");

  usuarios.forEach(({ name, email }) => {
    const li = document.createElement("li");
    li.textContent = `${name} - ${email}`;
    ul.appendChild(li);
  });

  contenedor.appendChild(ul);
};


// Mostrar cargando

const mostrarLoading = (): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.textContent = "Cargando...";
  contenedor.appendChild(p);
  return p;
};


// Mostrar error

const mostrarError = (): void => {
  const p = document.createElement("p");
  p.textContent = "Ocurrió un error al cargar los usuarios";
  p.style.color = "red";
  contenedor.appendChild(p);
};


// Función principal

const init = async (): Promise<void> => {
  const loading = mostrarLoading();

  try {
    const usuarios = await obtenerUsuarios();

    contenedor.removeChild(loading);
    renderUsuarios(usuarios);

  } catch (error) {
    contenedor.removeChild(loading);
    mostrarError();
  }
};

// Ejecución
init();