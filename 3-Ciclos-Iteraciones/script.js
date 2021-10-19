/*
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
*/

//i j k

//i++ i = i+1
/*
for(let i=0; i < 11; i++){
    let numeroo = parseInt(prompt("Ingresa 5 para cortar"))
    if(numeroo == 5) {
        console.log("Soy 5")
        break
    }
    
}
*/

let numero = 5

// Error Break

if(numero == 5) {
    console.log("numero igual a 5")
    //break
}

let numero1 = 5

for(let i = 1; i<= 10; i++) {
    console.log(`Numero ${numero1} multiplicado por ${i} es igual a ${numero1 * i}`)
}

//Error i no es conocido por fuera del for
//console.log(i)

console.log("Termine for")

/*
let esVerdad = true

while(esVerdad) { //while(esVerdad = true)
    let valorVerdad = prompt("Ingrese falso para terminar")
    if(valorVerdad == "falso") 
        esVerdad = false //esVerdad = 0
    if(valorVerdad == "terminar")
        break
}



let ejecucion

while(ejecucion != "ESC") {
    let producto = prompt("Ingrese un producto para agregarle el iva")
    console.log(producto * 1.21)
    ejecucion = prompt("Ingrese ESC para terminar")
}

let precioLicuadora = 100;

do {
    let producto = prompt("Ingrese un producto").toLowerCase()
    
    if(producto = "licuadora") {
        console.log(precioLicuadora * 1.21)
    }

    /*
    let producto = parseFloat(prompt("Ingrese un producto para agregarle el iva"))
    if(isNaN(producto)) {
        alert("Por favor ingresame un numero")
    } else {
        console.log(producto * 1.21)
    }
    
    var ejecucion = prompt("Ingrese ESC para terminar") 
} while(ejecucion != "ESC")
*/

let operacion = prompt("Ingrese una operacion matematica")

switch(operacion) {
    case "+":
        console.log(5 + 5)
        break
    case "-":
        console.log(5 - 5)
        break
    case "*":
        console.log(5 * 5)
        break
    case "/":
        console.log( 5 / 5)
        break
    default:
        console.log("Operacion invalida")
        break
}

if(operacion == "+") {
    console.log(5 + 5)
} else if(operacion == "-") {
    console.log(5 - 5)
} else if(operacion == "*") {
    console.log(5 * 5)
} else if(operacion == "/") {
    console.log( 5 / 5)
} else {
    console.log("Operacion invalida")
}

