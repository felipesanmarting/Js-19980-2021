/*
let datos = []

let boton = document.getElementById("boton1")
let div = document.getElementById("div1")

boton.addEventListener("click", () => {
    let input = document.getElementById("input")
    div.innerHTML += `<p> ${input.value} </p>`
    datos.push(input.value)
    input.value = ""
    console.log(datos)
})



boton.onclick = () => {
    console.log("Diste Click en Onclick!")
}

class Persona{
    constructor(id, nombreCompleto, edad, altura, peso) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }
}

let id = 1;
let personas = []
let formPersona = document.getElementById("formPersona")

formPersona.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let formDatos = new FormData(e.target)
    console.log(e.target)
    console.log(formDatos.get("nombre"))
    console.log(formDatos.get("edad"))
    console.log(formDatos.get("altura"))
    console.log(formDatos.get("peso"))

    let persona = new Persona(id, formDatos.get("nombre"), formDatos.get("edad"), formDatos.get("altura"), formDatos.get("peso"))
    id++
    console.log(persona)
    personas.push(persona)
})
*/

document.getElementById("input1").addEventListener("change", () => {
    let parrafo1 = document.getElementById("parrafo1")
    parrafo1.innerText = "Hola Coders!"
}) 

document.getElementById("input2").addEventListener("input", () => {
    let parrafo2 = document.getElementById("parrafo2")
    parrafo2.innerText += "Hola"
})