let numero = parseInt(prompt("Ingresame un numero"))

if(numero == 3) { //=> arrow function
    console.log("Numero igual a 3")
} else if(numero == 4){
    console.log("Numero igual a 4")
} else {
    console.log("Numero no es ni 3 ni 4")
}

/*
    && Ambas condiciones verdaderas
    || Con una condicion verdadera
*/

if((numero >= 1 && numero <= 5) || (numero >=6 && numero <=10)){
   console.log("El numero " + numero + " esta entre 1 y 5 o esta entre 6 y 10")
   console.log(`El numero ${numero} esta entre 1 y 5 o esta entre 6 y 10`)
} else {
    console.log(`El numero ${numero} no esta entre 1 y 10`)
}

let numeroEntre1y10 = (numero >= 1 && numero <=10)
let numeroEntre1y5 = (numero >=1 && numero <=5)
let numeroIgual6o7 = (numero == 6 || numero == 7)
let numeroIgual8o9 = (numero == 8 || numero == 9)
let numeroIgual10 = (numero == 10)

if(numeroEntre1y10) {
    if(numeroEntre1y5)
        console.log("Desaprobado") 
    if(numeroIgual6o7) 
        console.log("Aprobado")
    if(numeroIgual8o9)
        console.log("Aprobado nota de muy bien")
    if(numeroIgual10) 
        console.log("Aprobado con nota de excelente")

} else {
    console.log("Numero incorrecto")
}

/*
numero >= 1     &&     numero <= 5
    V            V           V
    V            F           F
    F            F           V
    F            F           F
*/