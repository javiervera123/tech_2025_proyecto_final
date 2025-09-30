// Función que lee el contenido de un archivo y lo inserta en un elemento 
// // HTML. Esta función se usará para cargar el menú y el pie de página. 
function cargarFragmento(idElemento, archivo) {
    fetch(archivo)
    .then(respuesta => respuesta.text())
    .then(contenido => { document.getElementById(idElemento).innerHTML = contenido; }).catch(error => console.error(`Error cargando ${archivo}:`, error));
}
// Cargar el menú y el pie de página al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarFragmento("menu", "menu.html");
    cargarFragmento("pie", "pie.html");
});
function cargarFragmento(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar " + url);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.error(error));
}