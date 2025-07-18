import { productos } from "./productos.js";
import { renderizarTienda, buscarProductos, filtrarYOrdenarProductos } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;

    if (pathname.includes("index")) {
        const contenedorDestacados = document.querySelector('#contenedor1 .productos-grid');
        if (contenedorDestacados) {
            // Filtrar productos destacados y renderizarlos en el contenedor correspondiente
            const productosDestacados = productos.filter(p => p.destacado);
            renderizarTienda(productosDestacados, contenedorDestacados);

            // Evento para botón consultar precio en index.html
            contenedorDestacados.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-cta2')) {
                    window.location.href = 'contacto.html';
                }
            });
        }

    } else if (pathname.includes("productos")) {
        const contenedorTodos = document.querySelector('#contenedor .productos-grid');
        if (contenedorTodos) {
            // Variable para almacenar la lista actual filtrada/ordenada
            let productosFiltrados = [...productos];
            // Renderizar todos los productos inicialmente
            renderizarTienda(productosFiltrados, contenedorTodos);

            const inputBuscar = document.querySelector('#buscar');
            const formBuscar = document.querySelector('.filtros-form');
            const selectOrden = document.querySelector('#orden-nombre');

            // Evento para búsqueda al enviar el formulario
            if (formBuscar && inputBuscar) {
                formBuscar.addEventListener('submit', e => {
                    e.preventDefault(); // Evita que recargue la página
                    const texto = inputBuscar.value.toLowerCase();
                    productosFiltrados = buscarProductos(productos, texto);

                    // Si hay selectOrden, ordenamos según valor actual
                    if (selectOrden) {
                        productosFiltrados = filtrarYOrdenarProductos(productosFiltrados, selectOrden.value);
                    }

                    renderizarTienda(productosFiltrados, contenedorTodos);
                });
            }

            // Evento para ordenamiento al cambiar el select
            if (selectOrden) {
                selectOrden.addEventListener('change', () => {
                    productosFiltrados = filtrarYOrdenarProductos(productosFiltrados, selectOrden.value);
                    renderizarTienda(productosFiltrados, contenedorTodos);
                });
            }

            // Evento para botón consultar precio en productos.html
            contenedorTodos.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-cta2')) {
                    window.location.href = 'contacto.html';
                }
            });
        }
    }
});
