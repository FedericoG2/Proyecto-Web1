// 1 - Importar datos tienda
// 2 - Importamos la función de renderizado
import { productos } from "./productos.js";
import { renderizarTienda } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;

    if (pathname.includes("index")) {
        const contenedorDestacados = document.querySelector('#contenedor1 .productos-grid');
        if (contenedorDestacados) {
            const productosDestacados = productos.filter(p => p.destacado);
            renderizarTienda(productosDestacados, contenedorDestacados);
        } else {
            console.error("Error: Contenedor de productos destacados no encontrado.");
        }

    } else if (pathname.includes("productos")) {
        const contenedorTodos = document.querySelector('#contenedor .productos-grid');
        if (contenedorTodos) {
            renderizarTienda(productos, contenedorTodos);
        } else {
            console.error("Error: Contenedor de todos los productos no encontrado.");
        }
    }
});
