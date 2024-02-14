# Mi Aplicación E-commerce

Esta es una aplicación e-commerce desarrollada en React Native que permite a los usuarios explorar y comprar productos de forma segura y conveniente.

## Funcionalidades

### Autenticación
- Utiliza el sistema de autenticación de Firebase para gestionar el registro y acceso de usuarios de forma segura.

### Pantallas

#### Productos
- Pantalla principal donde los usuarios pueden ver las categorías de productos disponibles.
- Al seleccionar una categoría, los usuarios pueden ver una lista de productos asociados a esa categoría.
- Cada producto se muestra en una tarjeta con su nombre e imagen.
- Al seleccionar un producto, los usuarios son llevados a la pantalla de detalle de producto.
- Incluye una barra de búsqueda para buscar productos dentro de la categoría seleccionada.

#### Detalle de Producto
- Muestra detalles adicionales del producto seleccionado, como el precio, el stock, el rating y más imágenes del producto.
- Los usuarios pueden agregar el producto al carrito de compras desde esta pantalla.

#### Carrito
- Los usuarios pueden ver los productos que han seleccionado para comprar.
- Se muestra el total de la suma de los productos.
- Los usuarios pueden eliminar productos seleccionados y confirmar la orden para finalizar la compra.

#### Órdenes
- Muestra todas las órdenes relacionadas con el ID del usuario, permitiéndoles realizar un seguimiento de sus compras anteriores.

#### Perfil
- Los usuarios pueden ver información sobre ellos mismos, incluida una fotografía y su ubicación geográfica utilizando la API de Google.

## Instalación

1. Clona el repositorio: `git clone https://github.com/Fededkn/ventasMovil.git`
2. Instala las dependencias: `npm install`
3. Configura tu proyecto en Firebase y asegúrate de tener las credenciales correctas.
4. Inicia la aplicación: `npm start`

## Tecnologías Utilizadas

- React Native
- Firebase

## Futuras Mejoras

- Añadir la posibilidad de dejar reseñas y comentarios sobre los productos.
- Confirmación para la eliminación de producto dentro del Carrito.
- Añadir detalles de la compra en cada orden creada.

## Autores

- fededkn