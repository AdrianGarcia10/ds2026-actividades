"use strict";
function generar() {
    const input = document.getElementById("altura");
    const resultado = document.getElementById("resultado");
    const valor = input.value;
    const n = Number(valor);
    // Validación
    if (valor === "" || n < 1) {
        resultado.textContent = "Error: ingresá un número válido mayor a 0";
        return;
    }
    const salida = generarAsteriscos(n);
    resultado.textContent = salida;
}
function generarAsteriscos(n) {
    let salida = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            salida += "*";
        }
        salida += "\n";
    }
    return salida;
}
