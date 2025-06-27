import { productos } from './productos-js.js';

function plantillaHtml(producto) {
    return `
    <div class="producto-card">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <button class="btn-cta2">${producto.botonTexto}</button>
    </div>
    `;
}

// Para productos.html: muestra todos los productos
const grid1 = document.querySelector('#contenedor .productos-grid');
if (grid1) {
    let html1 = '';
    productos.forEach(producto => {
        html1 += plantillaHtml(producto);
    });
    grid1.innerHTML = html1;
}

// Para index.html: muestra solo los primeros 3
const grid = document.querySelector('#contenedor1 .productos-grid');
if (grid) {
    let html = '';
    productos.slice(0, 3).forEach(producto => {
        html += plantillaHtml(producto);
    });
    grid.innerHTML = html;
}


