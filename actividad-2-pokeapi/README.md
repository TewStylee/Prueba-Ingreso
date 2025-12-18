## Prueba de Ingreso - Actividad 2
Esta PokeAPI permitirá explorar el mundo de Pokemón. Se enfoca en el manejo de estados de carga, navegación dinámica y una lógica de paginación basada en desplazamientos.

## Características
- Paginación Técnica: Implementación de navegación mediante parámetros limit y offset.
- Búsqueda Directa: Localización de Pokémon por nombre exacto o ID.
- Vista de Detalle: Información técnica (tipos, habilidades, peso, altura) y arte oficial.

## Instrucciones de Ejecución
1. **Instalar dependencias:**
    ng serve -o
    ng g c components/pokemon-list --skip-tests
    ng g c components/pokemon-detail --skip-tests

2. **Lanzar proyecto:**
    ng serve

## Explicación

1. **Paginación (Limit & Offset)**
Esta PokeApi utiliza Limit para saber cuantos registros trae (fijado en 20) y Offset para que al pulsar "siguiente" este aumenta de 20 en 20 y así el control sea mejor.

1. **Búsqueda**
Se implemente la búsqueda por redirección, así el motor de búsqueda toma el término ingresado y navega directamente a la ruta de detalle (/pokemon/:id), ahí se valida si existe o no el Pokemón.

## Endpoints Utilizados
Listado: https://pokeapi.co/api/v2/pokemon?offset={val}&limit={val}
Detalle/Búsqueda: https://pokeapi.co/api/v2/pokemon/{nombre_o_id}