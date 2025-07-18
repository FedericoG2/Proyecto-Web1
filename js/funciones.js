export function renderizarTienda(productosArray, contenedorElemento) {
    let htmlTotal = ''; // Variable para acumular el HTML de todos los productos

    productosArray.forEach(producto => {
        // Construimos el string HTML para CADA producto usando template literals
        // siguiendo la estructura exacta de tu plantilla HTML
        const htmlProducto = `
            <div class="producto-card">
                 <img src="${producto.imagen}" alt="${producto.titulo}">
                 <h3>${producto.titulo}</h3>
                 <button class="btn-cta2">${producto.botonTexto}</button>
            </div>
        `;
        htmlTotal += htmlProducto; // Añadir el HTML de este producto al total
    });

    // Insertar el HTML acumulado en el contenedor
    contenedorElemento.innerHTML = htmlTotal;
}