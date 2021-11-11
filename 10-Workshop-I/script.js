let clientes = []

let formCliente = document.getElementById("formCliente")
let botonClientes = document.getElementById("botonMostrarClientes")
let divClientes = document.getElementById("divClientes")

formCliente.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)
    let datosFormulario = new FormData(e.target)
    const cliente = new Cliente(datosFormulario.get("nombre"), datosFormulario.get("apellido"), datosFormulario.get("email"), datosFormulario.get("edad"), datosFormulario.get("sueldo"))
    clientes.push(cliente)
    localStorage.setItem('clientes',JSON.stringify(clientes))
    formCliente.reset()
})

botonClientes.addEventListener("click", () => {
    let clientesParseados = JSON.parse(localStorage.getItem('clientes'))
    clientesParseados.forEach((cliente, indice) => {
        divClientes.innerHTML += `
        <div class="card" style="width: 18rem;" id="cliente${indice + 1}">
            <div class="card-body">
                <h5 class="card-title">Cliente N°${indice + 1}</h5>
                <p>Nombre: ${cliente.nombre}</p>
                <p>Apellido: ${cliente.apellido}</p>
                <p>Edad: ${cliente.edad}</p>
                <p>Email: ${cliente.email}</p>
                <p>Sueldo: ${cliente.sueldo}</p>
            </div>
        </div>
    `
    })
    
})