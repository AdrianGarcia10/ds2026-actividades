const input = document.querySelector("#inputProducto");
const boton = document.querySelector("#btnAgregar");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

let cantidad = 0;


const actualizarContador = () => {
  contador.textContent = `${cantidad} productos en la lista`;
};

boton.addEventListener("click", () => {
  const nombre = input.value.trim();


  if (nombre === "") {
    alert("El campo no puede estar vacío");
    return;
  }


  const li = document.createElement("li");
  li.textContent = nombre;


  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";


  btnEliminar.addEventListener("click", () => {
    lista.removeChild(li);
    cantidad--;
    actualizarContador();
  });


  li.appendChild(btnEliminar);


  lista.appendChild(li);


  input.value = "";


  cantidad++;
  actualizarContador();
});