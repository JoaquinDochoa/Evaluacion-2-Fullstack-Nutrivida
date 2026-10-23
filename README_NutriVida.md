# NutriVida — Clínica Nutricional

## Contextualización del caso

NutriVida es una clínica de nutrición y dietética fundada en 2016 en Temuco, Región de La Araucanía. Cuenta con cuatro nutricionistas que atienden a pacientes con diferentes objetivos: pérdida de peso, control de enfermedades metabólicas, nutrición deportiva y alimentación vegetariana o vegana.

De acuerdo con el caso de estudio del curso DSY1104 — Desarrollo FullStack II, la clínica atiende aproximadamente 60 pacientes a la semana. Originalmente, el agendamiento se realiza por teléfono o presencialmente y la secretaria administra las horas mediante agendas de papel. Los nutricionistas también registran las mediciones y el progreso de los pacientes en fichas físicas. Estas condiciones dificultan la consulta de información, la reprogramación de horas y el seguimiento entre sesiones. El caso plantea la necesidad de avanzar hacia una solución digital accesible desde computadores y dispositivos móviles.

## Descripción del proyecto

Este proyecto es un sitio web académico desarrollado con React y Vite para presentar la clínica NutriVida y sus servicios de atención nutricional. Incorpora herramientas interactivas de demostración, como consulta de servicios, carrito de sesiones, registro e inicio de sesión, perfil del paciente y un panel de administración.

El sitio mantiene una interfaz adaptable a distintos tamaños de pantalla y organiza el código en componentes reutilizables.

## Funcionalidades disponibles

- **Inicio:** presentación general de la clínica.
- **Servicios:** catálogo de atenciones nutricionales, con búsqueda y filtros.
- **Detalle del servicio:** información de cada atención y opción de agregarla al carrito.
- **Carrito de sesiones:** permite revisar servicios seleccionados, modificar cantidades y simular una solicitud; no realiza cobros ni reservas reales.
- **Nosotros:** información sobre NutriVida y su equipo.
- **Blog:** artículos y recomendaciones relacionadas con hábitos saludables.
- **Contacto:** formulario con validación de campos.
- **Registro e inicio de sesión:** formularios para crear una cuenta de demostración e ingresar al sitio.
- **Mi perfil:** muestra los datos asociados a la sesión del usuario.
- **Panel de administración:** acceso restringido mediante sesión de demostración para gestionar temporalmente los servicios y utilizar las vistas administrativas disponibles.

## Instrucciones de uso

### 1. Ejecutar la aplicación

Es necesario tener instalado Node.js y npm. Abre la carpeta del proyecto en Visual Studio Code y ejecuta:

```bash
npm install
npm run dev
```

Luego abre en el navegador la dirección local que muestra la terminal, normalmente `http://localhost:5173/`.

### 2. Navegar por el sitio

Desde el menú principal puedes acceder a Inicio, Servicios, Nosotros, Blog y Contacto. En Servicios puedes consultar las atenciones, revisar sus detalles y agregarlas al carrito. En el carrito puedes modificar las cantidades y probar el flujo de confirmación simulada.

### 3. Registrarse e iniciar sesión

En **Registrarse** puedes completar el formulario de paciente con los datos solicitados. Luego puedes ingresar mediante **Iniciar sesión** y consultar **Mi perfil**. Las validaciones comprueban los campos requeridos y los formatos definidos para el proyecto.

### 4. Acceder al panel de demostración

Para probar las vistas administrativas, utiliza las credenciales de ejemplo:

- **Correo:** `admin@nutrivida.cl`
- **Contraseña:** `Admin1234`

Desde el panel puedes explorar las funciones administrativas de demostración. La incorporación, modificación o eliminación de servicios utiliza el estado de la aplicación y no una base de datos persistente.

## Tecnologías utilizadas

- React y JavaScript (JSX)
- Vite y Node.js para el entorno de desarrollo
- React Router DOM para la navegación
- React Bootstrap en formularios y elementos específicos
- CSS para los estilos y el diseño responsivo
- `useState`, Context y `localStorage` para la interacción y sesión de demostración
- Vitest para pruebas automatizadas

## Organización del código

```text
src/
├── assets/       # Imágenes y recursos visuales
├── components/   # Componentes reutilizables
├── context/      # Estado compartido
├── data/         # Datos de servicios y ubicaciones
├── utils/        # Validaciones y funciones auxiliares
├── views/        # Páginas de la aplicación
├── App.jsx       # Configuración de navegación
└── main.jsx      # Punto de entrada
```

## Pruebas y compilación

Ejecutar las pruebas:

```bash
npm test
```

Comprobar la compilación de producción:

```bash
npm run build
```

## Alcance del proyecto

NutriVida es un **prototipo académico frontend**. La autenticación es de demostración y el uso de `localStorage` no reemplaza un sistema seguro de usuarios. El carrito no procesa pagos ni agenda horas reales; tampoco existen recordatorios automáticos, historial clínico digital persistente ni integración con una base de datos. Estas necesidades forman parte del contexto y la visión del caso, pero no deben confundirse con funcionalidades ya implementadas.
