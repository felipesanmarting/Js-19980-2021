/*
let contador = 0;

do {
    let nombre = prompt("Ingrese un nombre")
    console.log(nombre)
    contador++
    console.log(contador)
}while(contador < 6)



let numeroDos = 2;

function contador(numero) {
    let numeroUno = 1 
    numeroDos = 3
    console.log(numeroDos)
    return numero + numeroDos
}

console.log(contador(1))
console.log(numeroDos)

let a = 3

function suma(a) {
    return a + 1
}

const suma = (a) => a+1

a = suma(a)

console.log(a)
*/

function pedirNotas() {
    let acum = 0;
    let cant = 0;
    do {
        let nota = parseFloat(prompt("Ingrese una nota"))
        acum += nota
        cant++
        sigue = prompt("¿Desea ingresar otra nota?").toLowerCase()
    }while(sigue != "no")

    return acum / cant;
}

function calcularPromedio(promedio) { 
    let tipoPromedio;

    if (promedio>=1 && promedio <6) {
        tipoPromedio = "desaprobado"
    } else {
        tipoPromedio = "aprobado"
    }

    return tipoPromedio
}

function mostrarPromedio(alumno, tipoPromedio) { 
    console.log(`El promedio del alumno ${alumno} da como resultado que esta ${tipoPromedio}` )
}

function  menuPrincipal() {
    do {
        alumno = prompt("Ingrese el nombre del alumno")
        mostrarPromedio(alumno, calcularPromedio(pedirNotas()))
        sigue = prompt("¿Desea ingresar otro/a alumno/a?").toLowerCase()
    }while(sigue != "no")
}

menuPrincipal()


let puntaje = 0;
let cant = 0;

while(cant < 7 || respuesta != "correcta") {
    consulta = parseInt(prompt("Cuantos años tenia Napoleon cuando fallecio"))

    if(consulta == 51) {
        respuesta = "correcta"
    } else {
        cant++
    }

    if(cant == 5) {
        "Pista: Fallecio cerca del 1820"
    }

}

if(respuesta == "corrrecta") {
    puntaje++
}