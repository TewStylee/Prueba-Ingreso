# Prueba de Ingreso - Actividad 1: Rick & Morty
Se desarrollo este proyecto en Angular, que consume la API pública de Rick & Morty. Permite explorar personajes, filtrar por criterios específicos y ver detalles en profundidad (incluyendo nombres reales de episodios), implementando buenas prácticas de arquitectura y manejo de estado.

## Características
- **Listado de Personajes:** Visualización en grilla responsive con tarjetas informativas.
- **Filtros Combinados:** - Búsqueda por texto (Nombre).
  - Selector de Estado (Alive, Dead, Unknown).
  - Selector de Especie (Human, Alien, etc.).
- **Paginación:** Navegación completa entre las páginas de resultados de la API.
- **Vista de Detalle Completa:** - Ruta dinámica `/character/:id`.
  - Información extendida del personaje.
  - **Lista detallada de episodios:** Muestra el código y el nombre del episodio.
- **Feedback al Usuario:** Indicadores de carga, manejo de errores y estados de "sin resultados".

## Tecnologías
- **Framework:** Angular 
- **Estilos:** SCSS (Diseño responsivo, Grid y Flexbox)
- **Http Client:** Consumo de API REST con `HttpClient` y `Observables`.
- **Routing:** Navegación SPA (Single Page Application).

## Instrucciones de Instalación y Ejecución
Para correr este proyecto localmente, son:

1. **Clonar el repositorio:**
    git clone <URL_DE_TU_REPO>
    cd <NOMBRE_DE_LA_CARPETA>

2. **Instalar dependencias:**
    npm install

2. **Ejecutar servidor de desarrollo**
    ng serve

2. **Ver en su navegador:**
    http://localhost:4200/

## Endpoints Utilizados
La aplicación consume la Rick and Morty API (Documentación: https://rickandmortyapi.com/documentation).

1. Para obtener Personajes
    Método: GET
    URL: https://rickandmortyapi.com/api/character/

Parámetros implementados:
page: Número de página.
name: Filtro por nombre.
status: Filtro por estado.
species: Filtro por especie.

2. Obtener Detalle de un Personaje
    Método: GET
    URL: https://rickandmortyapi.com/api/character/{id}
    Parámetro: id (Identificador único).

3. Obtener Múltiples Episodios
    Método: GET
    URL: https://rickandmortyapi.com/api/episode/{ids}
    Parámetro: ids