/*Ejercicio 4 - Arrays y bucles
● Crear un array con al menos 8 números*/

let numeros =[12, 5, 8, 21, 3, 17, 10, 8];

/*● Usando for o for...of, calcular y mostrar en consola:
○ La suma total
○ El promedio
○ El número mayor
○ El número menor*/
let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (let numero of numeros) {
    suma += numero;

    if (numero > mayor) {
        mayor = numero;
    }

    if (numero < menor) {
        menor = numero;
    }
}

let promedio = suma / numeros.length;

//muestra en consola
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Mayor:", mayor);
console.log("Menor:", menor);



/*● Crear una función generarAsteriscos(n) que reciba un número y
retorne un string con esa cantidad de asteriscos (ej:
generarAsteriscos(5) → "*****"). Usar un bucle for.
 */

function generarAsteriscos(n) {
    let resultado = "";

    for (let i = 0; i < n; i++) {
        resultado += "*";
    }

    return resultado;
}

console.log(generarAsteriscos(5));
console.log(generarAsteriscos(7));
