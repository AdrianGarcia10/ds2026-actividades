/*Crear una función clasificarNota(nota) que reciba un número y
retorne:
○ "Desaprobado" si es menor a 4
○ "Aprobado" si es entre 4 y 7
○ "Promocionado" si es 8 o más*/

function clasificarNota(nota){
    if (nota =>4 && nota<=7){
        return "Aprobado";
    }else if (nota <4){
        return "Desaprobado";
    }else{
        return "Promocionado";
    }
}

/*Crear una función diaDeLaSemana(numero) con switch que retorne
el nombre del día (1=Lunes...7=Domingo). Si es 6 o 7 agregar
"(fin de semana)". Si no es 1-7, retornar "Día inválido".*/
function diaDeLasemana(numero){
    let dia;

    switch(numero){
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
        case 7:
            dia = "Domingo";
            break;
    }

    return dia;
}

//Probar ambas funciones con console.log usando distintos valores.
//notas
console.log(clasificarNota(3)); 
console.log(clasificarNota(7)); 
console.log(clasificarNota(10));

//dia
console.log(diaDeLasemana(3));
console.log(diaDeLasemana(5));
console.log(diaDeLasemana(7));