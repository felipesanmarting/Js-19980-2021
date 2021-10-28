class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo
    }

    mostrarNombreCompleto() {
        console.log(`${this.nombre} ${this.apellido}`)
    }
}


/*persona1.mostrarNombreCompleto()
persona2.mostrarNombreCompleto()

let arrayPrueba1 = []

const arrayPrueba2 = [3, "Hola Coders", true, persona1]

console.log(arrayPrueba2)

for(let i = 0; i < arrayPrueba2.length; i++) {
    console.log(arrayPrueba2[i])
}

arrayPrueba2.push(persona2)

console.log(arrayPrueba2)

let elementoEliminado = arrayPrueba2.pop()
console.log(arrayPrueba2)
console.log(elementoEliminado)
console.log(arrayPrueba2[6])
//Error no puedo redefinir const
//arrayPrueba2 = []

const arrayPrueba3 = [persona2, "Gente", 10]
const arrayPrueba4 = arrayPrueba2.concat(arrayPrueba3)
console.log(arrayPrueba4.toString())
console.log(arrayPrueba4.join("*"))

let arrayPrueba5 = ["Francisco", "Lautaro", "Enzo", "Ayelen"]

arrayPrueba5 = arrayPrueba5.slice(0,1).concat(arrayPrueba5.slice(2,4))
console.log(arrayPrueba5)
*/


const persona1 = new Persona ("Francisco", "Pugh", 40, 10000)
const persona2 = new Persona ("Lautaro", "Montaña", 27, 15000)
const persona3 = new Persona ("Camila", "Busico", 25, 19500)
const persona4 = new Persona ("Patricia", "Vicente", 20, 20000)

const personas = [persona1, persona2, persona3, persona4]

console.log(personas)
/*
for(indice in personas) {
    console.log(indice)
    console.log(personas[indice])
}*/

for(persona of personas) {
    console.log(persona)
    /*for(atributo in persona) {
        console.log(persona[atributo])
    }*/
}

console.log(typeof personas)

//let nombreBuscar = prompt("Nombre a buscar")
//let personaEncontrada = personas.find(persona => persona.nombre === nombreBuscar)
/*
if(personaEncontrada) {
    console.log(`La persona que buscaste existe y su sueldo es ${personaEncontrada.sueldo}`)
} else {
    console.log("Persona no encontrada")
}*/

console.log(personas.filter(persona => persona.sueldo > 22000))

console.log(personas.map(persona => persona.edad))