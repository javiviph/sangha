# Últimos Cambios Realizados

Este documento registra las modificaciones recientes realizadas en la Landing Page de GIM Sangha. Debe actualizarse antes de cada deploy.

- **Accesibilidad y Usabilidad:**
  - Corregidos errores de botones sin nombre accesible (aria-labels en Carrusel).
  - Vinculadas todas las etiquetas de formulario (`label`) con sus respectivos `input` y `select` mediante `id` y `htmlFor`.
  - Mejorada la accesibilidad del checkbox de privacidad y selectors.
  - El logo ahora es un **SVG inlined** para carga instantánea (mejor LCP y accesibilidad).
  - Corregido el atributo `lang` del sitio a `es`.
- **Rendimiento (PageSpeed):**
  - Implementado **Code Splitting** con `React.lazy` y `Suspense` para diferir la carga de componentes por debajo del scroll (ahorro de ~400KB de JS inicial).
  - Optimización de carga del **Logo**: Añadido `fetchpriority="high"`, pre-carga (preload) y dimensiones explícitas para evitar CLS.
  - Ajuste del Logo en móvil: Reducido de 90px a 60px para mejorar la visibilidad y carga en pantallas pequeñas.
  - **Google Maps:** Implementado `loading="lazy"` para el iframe y `preconnect` a sus dominios para acelerar la conexión.
  - Mejora en la carga de fuentes mediante pre-conexión a `fonts.gstatic.com`.
- **Documentación:** Creado este documento `ULTIMOS_CAMBIOS.md` para seguimiento de actualizaciones.
- **Formularios:** Ajustado el diseño responsive del formulario de captura para dispositivos móviles (campos apilados y botón de ancho completo).
- **Validación:** Mejorada la validación de formularios, estilos de input y claridad de los textos legales.
- **Diseño General:** Unificados los estilos de encabezados en las secciones de "Ubicaciones" y "Formulario de Captura".
- **CTA:** Simplificado el flujo de llamadas a la acción, unificando etiquetas de botones a 'Solicitar Inscripción' y eliminando el `SecondaryCTA`.

## [Cambios Anteriores Recientes]
- **Ubicaciones:** Añadida sección de ubicaciones con mapa interactivo.
- **Colaboradores:** Actualizado el nombre del entrenador a Konstatin Mudrack y añadidas fotos reales.
- **Precios:** Rediseñada la sección de precios, simplificando a solo "Inscripción General".
- **Testimonios:** Mejorado el contraste y atractivo visual de la cabecera de testimonios.
- **Arreglos Varios:** Restaurado el estilo de los entrenadores y corregido el enlace externo de reservas.
