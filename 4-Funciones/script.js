/*
for(let i = 0; i < 10; i++) {
    console.log(i+1)
}

for(let i = 0; i < 100; i++) {
    console.log(i+1)
}

for(let i = 0; i < 100; i++) {
    console.log(i+1)
}

for(let i = 0; i < 100; i++) {
    console.log(i+1)
}

for(let i = 0; i < 100; i++) {
    console.log(i+1)
}

function de1a10() {
    for(let i = 0; i < 100; i++) {
        console.log(i+1)
    }
}

de1a10()
de1a10()
de1a10()
de1a10()
de1a10()


function pedirNombre() {
    let nombre = prompt("Ingrese un nombre")
    console.log(`Nombre ${nombre} ingresado`)
    console.log("Nombre " + nombre + " ingresado")
}

pedirNombre()
pedirNombre()
pedirNombre()


function suma(numero1, numero2) {
    let numero3 = numero1 + numero2
    return numero3
}

let numero1 = 5
let numero2 = 10

console.log(suma(numero1,numero2))

console.log(numero3)



function calcularIVA(producto, iva2) {
    return producto * iva2
}

function sumarIVA(producto) {
    //Esto no debe hacerse
    //let IVA = 1.40 
    let resultado = calcularIVA(producto, IVA)
    return resultado
}

let IVA = 1.21;

console.log(sumarIVA(100))
console.log(sumarIVA(500))
console.log(IVA)


const suma = function(numero1, numero2) { return numero1 + numero2}
const resta = function(numero1, numero2) { return numero1 - numero2}
const division = function(numero1, numero2) { return numero1 / numero2}
const multiplicacion = function(numero1, numero2) { return numero1 * numero2}
*/

const suma = (numero1, numero2) => numero1 + numero2 
const resta = (numero1, numero2) => numero1 - numero2
const division = (numero1, numero2) => numero1 / numero2
const multiplicacion = (numero1, numero2) => numero1 * numero2

function calculadora(numero1, numero2, operacion) {
    
    switch(operacion) {
        case "+":
            alert(suma(numero1, numero2))
            break
        case "-":
            alert(resta(numero1, numero2))
            break
        case "/":
            alert(division(numero1, numero2))
            break
        case "*":
            alert(multiplicacion(numero1, numero2))
            break
        default:
            alert("Operacion invalida")
            break
    }
    
    /*
    if(operacion == "+") {
        alert(suma(numero1, numero2))
    } else if(operacion == "-") {
        alert(resta(numero1, numero2))
    } else if(operacion == "*") {
        alert(multiplicacion(numero1, numero2))
    } else if(operacion == "/") {
        alert(division(numero1, numero2))
    } else {
        alert("Operacion no valida")
    }*/

}

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese una operacion (+, -, *, /")

calculadora(numero1, numero2, operacion)