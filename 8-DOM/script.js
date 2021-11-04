/*
let parrafos = document.getElementsByClassName("parrafos")
let etiquetaParrafos = document.getElementsByTagName("p")
let parrafo1 = document.getElementById("parrafo1")

console.log(parrafos[0].children[0])
console.log(parrafo1)
console.log(etiquetaParrafos[0])

let parrafos2 = document.getElementById("parrafos2")
let parrafos2Clase = document.getElementsByClassName("parrafos2")
console.log(parrafos2)
console.log(parrafos2Clase)

let etiquetaP = document.createElement("p")
etiquetaP.innerText = "Hola Coders!"
etiquetaP.id = "etiquetaP"
etiquetaP.className = "etiquetaPClass"
parrafos2.appendChild(etiquetaP)
parrafos2.removeChild(etiquetaP)

parrafos2.innerHTML += `
    <p id="parrafo${5}" class="claseParrafo${5}">Hola gente</p>
`*/

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto(1,"Yerba Mate", 400, 20)
const producto2 = new Producto(2,"Cafetera", 1400, 15)
const producto3 = new Producto(3,"Licuadora", 2000, 10)
const producto4 = new Producto(4, prompt("Ingrese un producto"), parseFloat(prompt("Ingrese un precio")), parseInt(prompt("Ingrese un stock")))

const productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")

for(let producto of productos) {
    divProductos.innerHTML += `
        <div id="producto${producto.id}" class="producto${producto.id}">
            <p>Nombre: ${producto.nombre} </p>
            <p>Precio: ${producto.precio} </p>
            <p>Stock: ${producto.stock} </p>
        </div>
    `  
}

productos.forEach(producto => {
    divProductos.innerHTML += `
        <div id="producto${producto.id}" class="producto${producto.id}">
            <p>Nombre: ${producto.nombre} </p>
            <p>Precio: ${producto.precio} </p>
            <p>Stock: ${producto.stock} </p>
        </div>
    `  
})