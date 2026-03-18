# Especificaciones Técnicas - Landing Page GIM

Este proyecto ha sido desarrollado siguiendo estándares modernos de desarrollo web para garantizar velocidad, SEO y una experiencia de usuario fluida.

## Stack Tecnológico

- **Framework Core:** [React 19](https://react.dev/)
  - Utilizado por su eficiencia en la gestión del DOM y creación de interfaces modulares.
- **Herramienta de Construcción (Build Tool):** [Vite 8](https://vitejs.dev/)
  - Proporciona un entorno de desarrollo ultra rápido y optimiza el bundle final para producción (`dist/`).
- **Lenguaje:** JavaScript (ESM) con sintaxis moderna.

## Estilos y Diseño (UI/UX)

- **Arquitectura CSS:** Vanilla CSS (CSS Puro).
  - No se han utilizado frameworks de utilitarios (como Tailwind) para mantener el peso del sitio al mínimo y tener control total sobre la estética de marca.
- **Enfoque:** **Mobile First**.
  - El diseño ha sido concebido inicialmente para dispositivos móviles y adaptado progresivamente a pantallas grandes mediante Media Queries.
- **Tipografía:**
  - **Newsreader:** Fuente Serif para titulares, aportando un aire editorial y humano.
  - **Manrope:** Fuente Sans-serif para textos de lectura, priorizando la legibilidad.
- **Iconografía:** SVGs Inline.
  - Los iconos son vectores limpios incrustados directamente en el código para evitar peticiones HTTP extra y permitir personalización por CSS.

## Multimedia y Assets

- **Imágenes:** Generadas mediante IA de alta fidelidad, optimizadas para carga rápida.
- **Logotipos:** Uso de archivos PNG con transparencia, integrados mediante filtros CSS (`filter`) para permitir cambios de color dinámicos sin editar el archivo original.

## Despliegue y Arquitectura de Rutas

- **Hosting:** [Vercel](https://vercel.com/).
- **Configuración SPA:** Archivo `vercel.json` incluido para gestionar las reescrituras de rutas, asegurando que las recargas de página funcionen correctamente en una aplicación de una sola página (SPA).

## Mantenimiento y Control de Cambios

Para facilitar el seguimiento de las evoluciones del sitio, se utiliza el documento:
- [ULTIMOS_CAMBIOS.md](./ULTIMOS_CAMBIOS.md)

**Regla de Oro:** Este documento debe ser actualizado antes de cada despliegue (deploy) a producción, detallando de forma clara y concisa las mejoras o correcciones implementadas.

