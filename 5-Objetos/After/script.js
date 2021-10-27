const pokemon1 = new Pokemon("Pikachu", "Electrico", "Amarillo", 10, 15)
const pokemon2 = new Pokemon("Charmander", "Fuego", "Rojo", 8, 12)
const pokemon3 = new Pokemon("Eevee", "Normal", "Marron", 7, 11)

pokemon1.moverse(10)
console.log(pokemon1.tipo)
pokemon1.tipo = "Fuego"
console.log(pokemon1.tipo)

pokemon1.atacar(pokemon2)
pokemon2.atacar(pokemon1)
pokemon1.atacar(pokemon2)
pokemon3.atacar(pokemon1)