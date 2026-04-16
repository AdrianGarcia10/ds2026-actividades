/*● Crear función calcularPrecioFinal(monto, medioPago) donde
medioPago es "E" (efectivo), "D" (débito) o "C" (crédito):
○ Monto menor a $200: sin descuento
○ Entre $200 y $400: 30% off en efectivo, 20% débito, 10%
crédito
○ Mayor a $400: 40% off para todos
○ Retornar el monto final*/ 

function calcularPrecioFinal(monto, medioPago){
    if (monto <200){
        return monto;
    }else if(monto >= 200 && monto<=400){
        switch (medioPago){
            case "E":
                return (monto-monto*0.3);
            case "D":
                return (monto-monto*0.2);
            case "C":
                return (monto-monto*0.1);
            default:
                console.log("Medio de pago no válido");
                return " Error";
        }
    }else {
        return (monto - monto *0.4);
    }
}
/*Probar con al menos 5 combinaciones diferentes de monto y
medio de pago. Mostrar cada resultado en consola con template
literals: "Monto: $X | Pago: Y | Final: $Z"*/

console.log(`Monto: $150 | Pago: E | Final: $${calcularPrecioFinal(150, "E")}`);
console.log(`Monto: $250 | Pago: C | Final: $${calcularPrecioFinal(250, "C")}`);
console.log(`Monto: $250 | Pago: D | Final: $${calcularPrecioFinal(250, "D")}`);
console.log(`Monto: $500 | Pago: E | Final: $${calcularPrecioFinal(500, "E")}`);
//solo para prueba de error
console.log(`Monto: $150 | Pago: X | Final: $${calcularPrecioFinal(300, "X")}`);
