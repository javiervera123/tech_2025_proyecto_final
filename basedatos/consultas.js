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
