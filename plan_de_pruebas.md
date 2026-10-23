# Plan de Pruebas Unitarias

**Nombre de los Estudiantes:** Joaquin Ochoa, Antonio Tapia
<br />

**Componente / Módulo Principal:** Home, Contacto.
<br />

**Fecha:** 19-10-2026

<br />

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Carrito (`precioTotal`) | Carrito vacío = 0 | `items = []` y catálogo de 2 servicios | `precioTotal(items, productos)` | `total` es `0` | Pasa |
| 2 | Carrito (`precioTotal`) | Dos sesiones suman su valor | `items = [{ id: 1, cantidad: 2 }]` (servicio de $25.000) | `precioTotal(items, productos)` | `total` es `50000` | Pasa |
| 3 | Carrito (`precioTotal`) | Suma de diferentes servicios | `items` con el servicio 1 ($25.000) y el servicio 2 ($30.000), 1 sesión cada uno | `precioTotal(items, productos)` | `total` es `55000` | Pasa |
| 4 | Carrito (`precioTotal`) | Servicio inexistente no cobra | `items = [{ id: 100, cantidad: 1 }]` (id que no está en el catálogo) | `precioTotal(items, productos)` | `total` es `0` | Pasa |
| 5 | Catálogo de servicios (`filtrarServicios`) | Búsqueda ignora mayúsculas | Texto `'PESO'` en mayúsculas | `filtrarServicios(productos, 'PESO')` | El resultado tiene largo `1` | Pasa |
| 6 | Catálogo de servicios (`filtrarServicios`) | Filtrado por categoría | Categoría `'Deporte'` y texto vacío | `filtrarServicios(productos, '', 'Deporte')` | El primer resultado tiene `id` `2` | Pasa |
| 7 | Catálogo de servicios (`filtrarServicios`) | Filtros vacíos devuelven todos | Texto vacío y categoría `'Todas'` | `filtrarServicios(productos, '', 'Todas')` | El resultado tiene largo `2` | Pasa |
| 8 | Panel de control (`validarProducto`) | No permite servicio sin nombre | Servicio válido con `nombre: ''` | `validarProducto(datos)` | `error` no es una cadena vacía | Pasa |
| 9 | Panel de control (`validarProducto`) | Rechaza precio negativo | Servicio válido con `precio: -1` | `validarProducto(datos)` | `error` contiene `'precio'` | Pasa |
| 10 | Panel de control (`validarProducto`) | Acepta servicio válido | Servicio con código, nombre, descripción, precio, cupos y categoría | `validarProducto(datos)` | `error` es `''` | Pasa |
| 11 | Registro de paciente (`validarRegistro`) | Rechaza contraseñas diferentes | Registro válido con `confirmar` distinto de `password` | `validarRegistro(datos)` | `error` contiene `'coinciden'` | Pasa |
| 12 | Registro de paciente (`validarRegistro`) | Acepta registro válido con objetivo nutricional | Registro completo: RUN válido, correo `@gmail.com`, región, comuna y objetivo | `validarRegistro(datos)` | `error` es `''` | Pasa |
| 13 | Registro de paciente (`validarRegistro`) | Rechaza RUN inválido | Registro válido con RUN de dígito verificador incorrecto | `validarRegistro(datos)` | `error` contiene `'RUN'` | Pasa |
| 14 | Registro de paciente (`validarRegistro`) | Rechaza correos de dominios no permitidos | Registro válido con correo `@ejemplo.cl` | `validarRegistro(datos)` | `error` contiene `'correos'` | Pasa |
| 15 | Registro de paciente (`validarRegistro`) | Rechaza contraseñas fuera de 4 a 10 caracteres | Registro válido con contraseña de 11 caracteres repetida en `confirmar` | `validarRegistro(datos)` | `error` contiene `'entre 4 y 10'` | Pasa |
| 16 | Tarjeta de servicio (ServicioCard) | Cambiar texto del botón de Agregar a Agregado | Renderizar una tarjeta de servicio con el botón «Agregar» | Presionar el botón «Agregar» mediante fireEvent.click | El botón debe cambiar su texto a «Agregado»` | Falla |

Las pruebas 1–15 están en `src/utils/tienda.test.js`; 


la prueba 16 está en `src/components/ServicioCard.test.jsx`. Siguen el patrón AAA (Arrange, Act, Assert)

**Observación sobre la prueba 16:** Comprueba el componente real y una expectativa adicional de retroalimentación visual. El botón actual ejecuta la acción de agregar, pero conserva el texto «Agregar». No se modificó el comportamiento de la aplicación para provocar el fallo.

## Pruebas manuales de integración
- Visitar inicio, servicios, detalles, nosotros, blog y contacto.
- Buscar un servicio y marcarlo como favorito.
- Agregar dos sesiones al carrito, cambiar cantidad, quitar y confirmar simulación.
- Registrar paciente con RUN, región, comuna y objetivo; ver Mi perfil.
- Iniciar sesión admin con credenciales de prueba, agregar servicio, editarlo, borrarlo y comprobar catálogo público.
- Cerrar sesión y tratar de entrar a `/secretaria/servicios` (debe redirigir al login).
- Comprobar cabecera, tarjetas, formularios y tabla a ancho móvil.

## Ejecución
`npm install`, `npm test`, `npm run build`, `npm run dev`.
