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

export function buscarProductos(productosArray, textoBusqueda) {
    const texto = textoBusqueda.trim().toLowerCase();
    return productosArray.filter(p =>
        p.titulo.toLowerCase().includes(texto)
    );
}

export function filtrarYOrdenarProductos(lista, criterio) {
    const copia = [...lista];
    if (criterio === 'az') {
        return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (criterio === 'za') {
        return copia.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    return copia;
}
