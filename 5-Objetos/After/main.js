class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    calcularIva() {
        return this.precio * 1.21
    }

    descontarStock(nuevoStock) {
        this.stock -= nuevoStock
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock
    }
}

const producto1 = new Producto("Yerba Mate", 400, 100)

console.log(producto1.calcularIva())

do {

}while(isNaN(numero))

producto1.descontarStock(parseInt(prompt("Cuantos productos se vendieron?")))
producto1.aumentarStock(parseInt(prompt("Cuantos productos se compraron?")))
console.log(producto1.stock)