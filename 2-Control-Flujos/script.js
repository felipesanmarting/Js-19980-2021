/*
let numero = 6

let esVerdadero = false

let nombre

let esVacio = null

if (nombre) {
    console.log("Numero igual a " + numero)
    nombre = "Pepe"
} else {
    console.log("Numero no es igual a 5")
    nombre = 1
}
console.log(nombre)


//Par-Impar
if(numero % 2 == 0) {
    console.log("Numero par")
} else {
    console.log("Numero impar")
}

// Par-Impar loco
if(numero % 2) {
    console.log("Numero impar")
} else {
    console.log("Numero par")
}

if(0) {
    console.log("1")
} else {
    console.log("No 1")
}

*/

let numero1 = 6
let numero2 = "5"

let nombre1 = "Fran"
let nombre2 = "frank"

// > < >= <=
if(nombre1 >  nombre2) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

// Estrictamente igual
if (numero1 === numero2) {
    console.log("V")
    console.log(numero1 + numero2)
} else {
    console.log("F")
}

// Estrictamente distinto

if(numero1 !== numero2) {
    console.log("V")
} else {
    console.log("F")
}

if(numero1 == 6 && !(numero2 == 4)){
    console.log("V")
} else {
    console.log("F")
}   

if(numero1 == 6 || numero2 == 4){
    console.log("V")
} else {
    console.log("F")
}   

/*
    p    &&    q
    V     V    V
    V     F    F
    F     F    V
    F     F    F  
    
    p   !
    V   F
    F   V

    p    ||    q
    V     V    V
    V     V    F
    F     V    V
    F     F    F 
*/
/*
let nota = parseInt(prompt("Ingrese una nota"))

if(nota > 0 && nota < 6) {
    console.log("Desaprobado")
    if(nota == 4) {
        document.write("Alumno desaprobado con 4")
    }
} else if(nota == 6 || nota == 7) {
    console.log("Aprobado con nota de bien")
} else if(nota == 8 || nota == 9) {
    console.log("Aprobado con nota de muy bien")
} else if(nota == 10){
    console.log("Aprobado con nota de excelente")
} else {
    console.log("Nota invalida")
}

*/

let nota = parseInt(prompt("Ingrese una nota"))

let notaDesaprobado = (nota >= 1 && nota < 6)
let notaAprobado = (nota == 6 || nota == 7)
let notaMuyBien = (nota == 8 || nota == 9)
let notaExcelente = (nota == 10)

if(notaDesaprobado) {
    console.log("Desaprobado")
} else if(notaAprobado) {
    console.log("Aprobado con nota de bien")
} else if(notaMuyBien) {
    console.log("Aprobado con nota de muy bien")
} else if(notaExcelente) {
    console.log("Aprobado con nota de excelente")
} else {
    console.log("Nota invalida")
}
