// ✅ simulación de consultas a base de datos

// Función que devuelve productos filtrados por categoría
// o todos si no se especifica categoría

function obtenerProductosServicios(categoria = "") {
    if (categoria === null || categoria === "") {
        return lista_productos; //  devuelve todos
    } else {
        return lista_productos.filter(
            producto => producto.categoria == categoria // == compara valor (string y number
        ); //  devuelve filtrados
    }
}

// Función que devuelve un producto/servicio dado su código
function obtenerProductoServicioPorCodigo(codigo) {
    return lista_productos.find(
        producto => producto.codigo === codigo
    ) || null; //  devuelve el producto o null si no lo encuentra
}

console.log(" consultas.js cargado correctamente");

//funciones relacionadas con el carrito de compras
function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    let costo_total = 0;

    let carrito = obtenerCarrito();

    carrito.forEach((elemento) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                <div>
                    <p class="my-0"><strong>${elemento.nombre}</strong></p>
                    <small>$${elemento.precio}</small>
                </div>
                <button class="btn bg-warning text-dark" onclick="eliminarProducto('${elemento.codigo}')">
                    <i class="fa fa-times"></i>
                </button>
            </div>
        `;
        etiqueta_carrito.appendChild(li);
    });

    // Actualizar el total
    let total = carrito.reduce((acc, item) => acc + item.precio, 0);
    document.getElementById("etiqueta_total").textContent = total;
}
function obtenerCarrito() {

    return carrito;
}
function agregarProducto(producto, mostrar=true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar===true) {
        // Mostrar el carrito actualizado
        mostrarCarrito();
    }
   
}

function eliminarProducto(codigo) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.codigo !== Number(codigo));
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


function vaciarCarrito() {
    carrito = [];
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function obtenerCarrito() {
    let carrito = [];
    const str = localStorage.getItem('carrito');
    if (str) {
        carrito = JSON.parse(str);
    }
    return carrito;
}