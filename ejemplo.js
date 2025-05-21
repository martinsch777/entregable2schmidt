// Mensajes aleatorios
const mensajes = [
  "¡Bienvenido a nuestra tienda!",
  "Gracias por visitarnos hoy.",
  "¡Explora nuestras ofertas!",
  "Bienvenido, ¡esperamos que encuentres lo que buscás!",
  "¡Hola! Disfrutá de nuestros productos."
];

// Mostrar mensaje de bienvenida aleatorio
const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
const mensajeDiv = document.getElementById("mensajeBienvenida");
mensajeDiv.textContent = mensajeAleatorio;

// Captura nombre de usuario
const nombre = prompt("¿Cómo te llamás?");
if (nombre) {
  mensajeDiv.textContent += ` ¡Hola, ${nombre}!`;
  console.log(`Usuario identificado: ${nombre}`);
} else {
  alert("No ingresaste tu nombre. Se usará un nombre genérico.");
}

// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarEnDOM() {
    const contenedor = document.getElementById("productosContainer");

    const div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `
      <h3>${this.nombre}</h3>
      <p>Precio: $${this.precio}</p>
      <button>Agregar al carrito</button>
    `;

    // Acción al hacer clic
    div.querySelector("button").addEventListener("click", () => {
      const confirmar = confirm(`¿Agregar "${this.nombre}" al carrito por $${this.precio}?`);
      if (confirmar) {
        carrito.push(this);
        alert(`"${this.nombre}" fue agregado al carrito.`);
        console.log(`Carrito actual:`, carrito);
      }
    });

    contenedor.appendChild(div);
  }
}

// Declaración de productos
const productos = [
  new Producto("Zapatillas Urbanas", 9500),
  new Producto("Remera Estampada", 4200),
  new Producto("Mochila Escolar", 6500),
  new Producto("Gorra deportiva", 2200)
];

// Array carrito de compras
let carrito = [];

// Función para mostrar todos los productos
function mostrarProductos() {
  productos.forEach(producto => {
    producto.mostrarEnDOM();
  });
}

// Mostrar productos al cargar
mostrarProductos();

// Función para filtrar productos por precio con ciclo y condicional
function filtrarPorPrecio() {
  const maxPrecio = parseInt(prompt("¿Cuál es el precio máximo que estás dispuesto a pagar?"));

  if (isNaN(maxPrecio)) {
    alert("Por favor, ingresá un número válido.");
    return;
  }

  const productosFiltrados = productos.filter(producto => producto.precio <= maxPrecio);

  if (productosFiltrados.length > 0) {
    alert(`Se encontraron ${productosFiltrados.length} producto(s) dentro del rango.`);

    // Limpiar y mostrar resultados filtrados
    document.getElementById("productosContainer").innerHTML = "";
    productosFiltrados.forEach(p => p.mostrarEnDOM());
  } else {
    alert("No hay productos dentro de ese rango de precio.");
  }
}

// Preguntar si desea filtrar
const deseaFiltrar = confirm("¿Querés filtrar los productos por precio?");
if (deseaFiltrar) {
  filtrarPorPrecio();
}

