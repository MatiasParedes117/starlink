# Proyecto Clon de Starlink

**Descripción:** Proyecto académico orientado a crear un clon visual interactivo y responsivo de la página de inicio de Starlink. 

## Estructura del Proyecto
- `src/`: Carpeta raíz del código fuente web.
  - `index.html`: Archivo HTML principal del sitio.
  - `assets/`: Directorio de recursos estáticos.
    - `css/`: Hojas de estilo. Contiene el `style.css` generado automáticamente por Tailwind.
    - `image/`: Imágenes locales del proyecto.
    - `js/`: Lógica de interactividad, incluyendo el `main.js`.
- `input/`: Carpeta de configuración inicial de estilos.
  - `input.css`: Archivo base para Tailwind CSS v4.* donde se configuran los estilos personalizados, capas de componentes (`@apply`) y animaciones.
- `package.json` / `node_modules/`: Entorno de Node.js, gestiona la dependencia y el CLI de Tailwind.
- `AGENTS.md`: Documento principal de información y reglas del proyecto.

## Comandos Disponibles
*   **Compilar para producción:** `npm run build` (Compila `input/input.css` hacia `src/assets/css/style.css`).
*   **Modo desarrollo (Watch):** `npm run dev` (Observa cambios en tiempo real y recompila Tailwind).

## Reglas y Directrices
1.  **Tecnologías:** Usar siempre HTML semántico y Tailwind CSS versión 4.*.
2.  **Gestión de Estilos:** Modificar siempre `input/input.css` para añadir nuevas directivas CSS globales o extraer componentes. Nunca editar directamente `src/assets/css/style.css`.
3.  **Arquitectura de Carpetas:** Respetar la jerarquía descrita. Nuevas imágenes van a `src/assets/image/`, scripts a `src/assets/js/`.
4.  **Actualización Continua:** Siempre que se añada un componente complejo, una nueva dependencia o se modifique la arquitectura, este documento (`AGENTS.md`) debe actualizarse. Leerlo antes de empezar cualquier tarea.

## Progreso Actual (Completado)
*   Se estructuró y configuró la jerarquía de carpetas correcta (`src`, `assets`, `input`).
*   Configuración de Tailwind CSS v4 CLI con NPM, incluyendo el modo *watch*.
*   Replicación del Header, Hero, Planes, Bloques de información y Footer de Starlink con diseño responsivo.
*   Integración de imágenes locales e implementación total en español.
