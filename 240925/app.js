const productos = [
  { nombre: "Camisa", precio: 300 },
  { nombre: "Pantalón", precio: 500 },
  { nombre: "Zapatos", precio: 800 },
  { nombre: "Sombrero", precio: 200 },

];

let carrito = [];

function mostrarMenu() {
  let menu = "=== Carrito de Compras ===\n";
  productos.forEach((producto, index) => {
    menu += `${index + 1}. Comprar ${producto.nombre} ($${producto.precio})\n`;
  });
  menu += `${productos.length + 1}. Ver tu carrito\n`;
  menu += `${productos.length + 2}. Pagar\n`;
  menu += "\nElige una opción (número):";

  let opcion = parseInt(prompt(menu));
  elegir(opcion);
}

function elegir(opcion) {
  if (opcion >= 1 && opcion <= productos.length) {
    carrito.push(productos[opcion - 1]);
    alert(` ${productos[opcion - 1].nombre} agregado con éxito.`);
    mostrarMenu();
  } else if (opcion === productos.length + 1) {
    verCarrito();
  } else if (opcion === productos.length + 2) {
    pagar();
  } else {
    alert(" Opción no válida. Intenta de nuevo.");
    mostrarMenu();
  }
}

function verCarrito() {
  if (carrito.length === 0) {
    alert(" Tu carrito está vacío.");
  } else {
    let lista = "=== Tu carrito ===\n";
    carrito.forEach((producto, index) => {
      lista += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(lista);
  }
  mostrarMenu();
}

function pagar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío, no puedes pagar.");
  } else {
    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    let resumen = "=== Pago ===\n";
    carrito.forEach((producto) => {
      resumen += `${producto.nombre} - $${producto.precio}\n`;
    });
    resumen += `\n Total a pagar: $${total}\n`;
    resumen += " Gracias por tu compra!";
    alert(resumen);
    carrito = []; 
  }
  mostrarMenu();
}

mostrarMenu();
