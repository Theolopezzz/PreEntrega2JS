const entradas = [
  {
    id: 1,
    nombre: "Campo",
    precio: 5000,
    cantidad: 0,
    descripcion: "Sector de campo frente al escenario, sin asientos",
    imagen: "./imgs/Campo.png",
  },
  {
    id: 2,
    nombre: "Platea",
    precio: 7000,
    cantidad: 0,
    descripcion: "Asientos numerados a los laterales del escenario",
    imagen: "./imgs/Platea.png",
  },
  {
    id: 3,
    nombre: "Palco",
    precio: 8000,
    cantidad: 0,
    descripcion: "Asientos numerados en altura de frente al escenario",
    imagen: "./imgs/Palco.png",
  },
  {
    id: 4,
    nombre: "Meet & Greet",
    precio: 15000,
    cantidad: 0,
    descripcion:
      "Acceso exclusivo para conocer a los artistas antes del show y sector a eleccion para el show",
    imagen: "./imgs/Meet.png",
  },
  {
    id: 5,
    nombre: "VIP Platinum",
    precio: 20000,
    cantidad: 0,
    descripcion:
      "Acceso exclusivo a la zona VIP en el escenario con asientos numerados",
    imagen: "./imgs/VIP.png",
  },
]

let contEntradas = document.getElementById("contenedor-entradas")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function renderEntradas(entradasArray) {
  entradasArray.forEach((entrada) => {
    const div = document.createElement("div")
    div.innerHTML = `<h3>${entrada.nombre}</h3>
                        <img src="${entrada.imagen}" alt="${entrada.nombre}">
                        <h4>${entrada.descripcion}</h4>
                        <p>Precio: $${entrada.precio}</p>
                        <button class="agregar-entrada" id="${entrada.id}">Agregar al carrito</button>`
    contEntradas.appendChild(div)
  })
  agregarAlCarrito()
}

function agregarAlCarrito() {
  document.querySelectorAll(".agregar-entrada").forEach((boton) => {
    boton.onclick = (e) => {
      const id = e.currentTarget.id
      const entradaSeleccionada = entradas.find((entrada) => entrada.id == id)
      if (carrito.some((entrada) => entrada.id === entradaSeleccionada.id)) {
        entradaSeleccionada.cantidad++
      } else {
        entradaSeleccionada.cantidad = 1
        carrito.push(entradaSeleccionada)
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      console.log(carrito)
    }
  })
}

renderEntradas(entradas)
