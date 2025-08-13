let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const totalIndex = document.getElementById("total")
const vaciarCarrito = document.getElementById("vaciar")

let carritoCont = document.getElementById("contenedor-carrito")

function renderCarrito(entradasCarrito) {
  entradasCarrito.forEach((entrada) => {
    const div = document.createElement("div")
    div.innerHTML = `<h3>${entrada.nombre} x${entrada.cantidad}</h3>
                        <button class="eliminar-entrada" id="${entrada.id}">Eliminar una entrada</button>
                        <p>Precio por unidad: $${entrada.precio}</p>`
    if (entrada.cantidad > 1) {
      div.innerHTML += `<p>Total x${entrada.cantidad} ${entrada.nombre}: $${
        entrada.precio * entrada.cantidad
      }</p>`
    }
    carritoCont.appendChild(div)
  })
  eliminarEntrada()
  const total = carrito.reduce((acc, entrada) => acc + entrada.precio, 0)
  totalIndex.textContent = total
}

vaciarCarrito.onclick = () => {
  carrito = []
  localStorage.setItem("carrito", JSON.stringify(carrito))
  carritoCont.innerHTML = ""
  renderCarrito(carrito)
}
function eliminarEntrada() {
  document.querySelectorAll(".eliminar-entrada").forEach((boton) => {
    boton.onclick = (e) => {
      const id = parseInt(e.currentTarget.id)
      const entradaSeleccionada = carrito.find((entrada) => entrada.id == id)
      if (entradaSeleccionada.cantidad > 1) {
        entradaSeleccionada.cantidad--
      } else {
        carrito = carrito.filter((entrada) => entrada.id !== id)
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      carritoCont.innerHTML = ""
      renderCarrito(carrito)
    }
  })
}
renderCarrito(carrito)
