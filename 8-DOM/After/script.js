let clientes = document.getElementsByClassName("clientes")
let cliente2 = document.getElementById("cliente2")
console.log(clientes[0].children[1])
cliente2.firstElementChild.innerText = "Hola Coders!."
/*
for(let i = 0; i < clientes.length; i++) {
   console.log(clientes[i])
}

let divAuto = document.createElement("div")
divAuto.id = "divAuto"
divAuto.className = "divAuto"
clientes[0].appendChild(divAuto)
*/
clientes[0].innerHTML += `<div id="divAuto" class="divAuto"></div>`

class Perro {
    constructor(id,nombre, color, raza, edad) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.raza = raza;
        this.edad = edad;
    }
}

let divPerros = document.getElementById("perros")
const perro1 = new Perro (1,"Peluche", "Negro", "Labrador", 5)
const perro2 = new Perro (2,"Copito de nieve", "Blanco", "Caniche", 3)
const perro3 = new Perro (3,"Cual", "Marron", "Pastor Aleman", 10)
const perro4 = new Perro (4,"Luna", "Negro", "Indefinida", 2)

const perros = [perro1, perro2, perro3, perro4]

perros.forEach((perro, index) => {
    divPerros.innerHTML += `
        <div class="card" style="width: 18rem;" id="perro${perro.id}">
            <div class="card-body">
                <h5 class="card-title">Perro N°${index + 1}</h5>
                <p>Nombre: ${perro.nombre} </p>
                <p>Raza:  ${perro.raza}</p>
                <p>Color:  ${perro.color}</p>
                <p>Edad:  ${perro.edad}</p>
            </div>
        </div>
    `
})
