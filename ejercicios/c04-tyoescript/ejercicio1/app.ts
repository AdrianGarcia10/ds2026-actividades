function generar(): void {
    const input = document.getElementById("altura") as HTMLInputElement;
    const resultado = document.getElementById("resultado") as HTMLElement;

    const valor: string = input.value;
    const n: number = Number(valor);

    // Validación
    if (valor === "" || n < 1) {
        resultado.textContent = "Error: ingresá un número válido mayor a 0";
        return;
    }

    const salida: string = generarAsteriscos(n);
    resultado.textContent = salida;
}

/* function generarAsteriscos(n: number): string (es la forma correcta)*/ 
function generarAsteriscos(n: string): string{
    let salida: string = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            salida += "*";
        }
        salida += "\n";
    }

    return salida;
}