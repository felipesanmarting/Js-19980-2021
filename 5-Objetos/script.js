
/*
const persona1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 60,
    altura: 2.00,
    peso: 90,
    cargo: "Profesor"
}

let persona2 = {
    nombre: "Fabrizio",
    apellido: "Turdo",
    edad: 30,
    altura: 1.8,
    peso: 78,
    cargo: "Alumno"
}



console.log(persona1)
console.log(persona2)

//persona1 = persona2
//console.log(persona1)

/*
for(let atributo in persona1) {
    console.log(persona1[atributo])
}



persona1.edad = 10
console.log(persona1.edad)

persona2.nota = 6
console.log(persona2)
*/

function Persona (nombre, apellido, edad, altura, peso, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.cargo = cargo;
    this.hablar = () => console.log("Hola Coders");
    this.retornarNombreCompleto = () => `${this.nombre} ${this.apellido}`
    this.aumentarEdad = (nuevaEdad) => this.edad += nuevaEdad
}

const persona1 = new Persona("Francisco", "Pugh", 40, 2, 90, "Profesor")
const persona2 = new Persona("Lautaro", "Montaña", 23, 2, 87, "Tutor")
//const persona3 = new Persona(prompt("Ingrese nombre"), prompt("Ingrese apellido"), parseInt(prompt("Ingrese edad")))

console.log(persona1.nombre)
console.log(persona2)
persona1.hablar()
console.log(persona2.retornarNombreCompleto())
persona2.aumentarEdad(5)
console.log(persona2)

class Animal {
    constructor(nombreComun, nombreCientifico, especie, color, numPatas, edad) {
        this.nombreComun = nombreComun;
        this.nombreCientifico = nombreCientifico;
        this.especie = especie;
        this.color = color;
        this.numPatas = numPatas;
        this.edad = edad;
    }

    correr(velocidad) {
        console.log(`El animal ${this.nombreComun} esta corriendo a ${velocidad} km/h`)
    }

    cumpleaños() {
        this.edad += 1;
        console.log(`El animal ${this.nombreComun} esta de cumpleaños!`)
    }
}

const animal1 = new Animal("Lobo", "Canis Lupus", "canino", "Gris", 4, 10)
console.log(animal1)

animal1.correr(30)
animal1.cumpleaños()