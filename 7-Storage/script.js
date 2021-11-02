/*
localStorage.setItem('Alumno', "Lautaro Blasco")
sessionStorage.setItem('Alumno', "Lucas Condomi")
localStorage.setItem('Alumno', 1)

let alumno1 = localStorage.getItem('Alumno')
console.log(alumno1)
let alumno2 = sessionStorage.getItem('Alumno')
console.log(alumno2)

localStorage.num = 5;
console.log(localStorage.num)
/*
localStorage.removeItem('Alumno')
localStorage.clear()


for(let i = 0; i < localStorage.length; i++ ) {
    let clave = localStorage.key(i)
    console.log(clave)
    console.log(localStorage.getItem(clave))
}

*/
class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    mostrarNombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }
}

let alumno1 = new Alumno("Francisco", "Pugh")
let alumno2 = new Alumno("Emiliano", "Massera")
let alumno3 = new Alumno("Cristian", "Gramajo")

let alumnos = [alumno1, alumno2, alumno3]

localStorage.setItem('Alumnos', JSON.stringify(alumnos))

let alumnosJSON = localStorage.getItem('Alumnos')

let alumnosLocalStorage = JSON.parse(localStorage.getItem('Alumnos'))

console.log(alumnosLocalStorage)
console.log(alumnosJSON)