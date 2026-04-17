function generar() {
    let input = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    let n = Number(input);

    // Validación
    if (input === "" || n < 1) {
        resultado.textContent = "Error: ingresá un número válido mayor a 0";
        return;
    }

    let salida = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            salida += "*";
        }
        salida += "\n";
    }

    resultado.textContent = salida;
}