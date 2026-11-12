# Penta Script — EcoRuta Temuco

Página web informativa sobre rutas y emprendimientos de turismo sustentable en La Araucanía.

## Integrantes y roles (Sprint actual)

| Nombre             | Rol ágil      |
|--------------------|---------------|
| Franco Lillo       | Dev           |
| Cristóbal Dapellus | Scrum Master  |
| Benjamín Pedraza   | Product Owner |
| José Sepúlveda     | QA            |

## Tecnologías utilizadas

- HTML5 (estructura semántica)
- CSS3 (diseño responsivo, mobile first)
- JavaScript (widget de clima con API Open-Meteo)
- Frameworks: no se utiliza un framework actualmente; el proyecto usa JavaScript vanilla.
- API: Open-Meteo Forecast API.

## Cómo ejecutar el proyecto

No hay que instalar nada. Se clona el repositorio y se abre `index.html` en el navegador.

```bash
git clone https://github.com/francou-ops/penta-script.git
```

También se puede abrir con la extensión Live Server de VS Code.

## Páginas

| Página | Archivo | Contenido |
|--------|---------|-----------|
| Inicio | `index.html` | Nueve rutas, ruta destacada, contacto de emergencia y servicios cercanos |
| Rutas fáciles | `pages/vista_1.html` | Tres rutas fáciles y sus recomendaciones |
| Rutas moderadas | `pages/vista_2.html` | Tres rutas moderadas y widget de clima en la ruta destacada |
| Rutas difíciles | `pages/vista_3.html` | Tres rutas difíciles y sus recomendaciones |

## Navegación del prototipo

Las dificultades se enlazan con HTML (`<a href="...">`). La portada muestra nueve rutas y cada vista agrupa tres rutas por dificultad.
La ficha moderada consulta Open-Meteo y muestra temperatura, viento, cielo, estados de carga y error.

## Estado del proyecto

- Sprint actual: Sprint 2
- Interfaz responsive con enfoque mobile first.
- Tres vistas de rutas por dificultad, con nueve rutas en la portada.
- Widget de clima integrado con la API pública Open-Meteo.
- JavaScript integrado para consultar y mostrar datos dinámicos.

## Tablero Trello

Enlace al tablero: https://trello.com/b/XcS33uFd/penta-script

## Enlace de despliegue

(https://francou-ops.github.io/penta-script/)

## Estructura actual del repositorio

```
penta-script/
├── index.html          # Página de inicio
├── pages/
│   ├── vista_1.html    # Ruta fácil de ejemplo
│   ├── vista_2.html    # Ruta moderada
│   └── vista_3.html    # Ruta difícil de ejemplo
├── css/
│   └── styles.css      # Hoja de estilos del equipo
├── js/
│   └── main.js          # Consulta y presentación del clima
├── img/                # Imágenes del sitio
├── .gitignore
└── README.md
```

## Contrato API

Contrato acordado en la reunión frontend-backend del jueves 12 de noviembre de 2026.
La foto de la hoja firmada está en la tarjeta "Contrato API" de Trello.

Si el contrato cambia, se cambia primero aquí y después en el código.

### Recursos

| Recurso | La interfaz lo… | Vistas que lo usan | Para qué le sirve al usuario |
|---|---|---|---|
| `rutas` | solo lee | Inicio, ListaRutas, DetalleRuta | Comparar rutas por distancia, dificultad y accesibilidad para elegir según el nivel. |
| `emprendimientos` | solo lee | Inicio, ListaEmprendimientos | Encontrar servicios cercanos a una ruta antes de iniciar el recorrido. |
| `resenas` | lee, crea y borra | DetalleRuta, FormularioResena | Leer opiniones de otros visitantes y dejar una reseña después del recorrido. Cualquier visitante puede borrar reseñas desde DetalleRuta. |

### Modelo de datos

El `id` siempre es `number` y lo genera el servidor. El frontend no lo envía al crear un recurso.

**`resenas`**

| Campo | Tipo | Reglas |
|---|---|---|
| `id` | `number` | Lo genera el servidor. |
| `rutaId` | `number` | Obligatorio; debe ser el `id` de una ruta existente. |
| `autor` | `string` | Obligatorio; máximo 20 caracteres. |
| `nota` | `number` | Obligatoria; número entero entre 1 y 5. |
| `comentario` | `string` | Opcional; máximo 300 caracteres. |

```ts
interface Resena {
  id: number;
  rutaId: number;
  autor: string;
  nota: number;
  comentario?: string;
}
```

```json
{
  "id": 1,
  "rutaId": 1,
  "autor": "Miguel Debian",
  "nota": 5,
  "comentario": "Buen sendero"
}
```

**`rutas`**

| Campo | Tipo | Reglas |
|---|---|---|
| `id` | `number` | Lo genera el servidor. |
| `nombre` | `string` | Obligatorio; máximo 60 caracteres. |
| `imagen` | `string` | Obligatorio; ruta relativa sin `/` inicial. |
| `alt` | `string` | Obligatorio. |
| `distanciaKm` | `number` | Obligatorio; en kilómetros y mayor que 0. |
| `dificultad` | `string` | Obligatoria; solo `facil`, `moderada` o `dificil`. |
| `descripcion` | `string` | Opcional; máximo 200 caracteres. |
| `accesible` | `boolean` | Obligatorio; `true` o `false`. |

```ts
interface Ruta {
  id: number;
  nombre: string;
  imagen: string;
  alt: string;
  distanciaKm: number;
  dificultad: string;
  descripcion?: string;
  accesible: boolean;
}
```

```json
{
  "id": 1,
  "nombre": "Sendero volcán Villarrica",
  "imagen": "img/volcan-villarrica.jpg",
  "alt": "Vista del sendero del volcán Villarrica",
  "distanciaKm": 12,
  "dificultad": "moderada",
  "descripcion": "Sendero de ascenso al volcán Villarrica",
  "accesible": false
}
```

**`emprendimientos`**

| Campo | Tipo | Reglas |
|---|---|---|
| `id` | `number` | Lo genera el servidor. |
| `nombre` | `string` | Obligatorio; máximo 60 caracteres. |
| `rubro` | `string` | Obligatorio; máximo 40 caracteres. |
| `comuna` | `string` | Obligatoria. |
| `enlace` | `string` | Obligatorio; ruta relativa sin `/` inicial. |

```ts
interface Emprendimiento {
  id: number;
  nombre: string;
  rubro: string;
  comuna: string;
  enlace: string;
}
```

```json
{
  "id": 1,
  "nombre": "Artesanías de Pucón",
  "rubro": "Artesanía local",
  "comuna": "Pucón",
  "enlace": "pages/vista_2.html"
}
```

### Contrato

| Método | Endpoint | Envía el frontend | Responde la API | Código | Vista o componente |
|---|---|---|---|---|---|
| `GET` | `/rutas` | nada | arreglo de rutas | 200 | Inicio, ListaRutas |
| `GET` | `/rutas/:id` | nada | una ruta | 200 · 404 | DetalleRuta |
| `GET` | `/emprendimientos` | nada | arreglo de emprendimientos | 200 | Inicio, ListaEmprendimientos |
| `GET` | `/resenas?rutaId=:id` | nada | arreglo de resenas de una ruta | 200 | DetalleRuta |
| `POST` | `/resenas` | `{ rutaId, autor, nota, comentario }`; los tres primeros campos son obligatorios y `comentario` es opcional | resena creada con su `id` | 201 | FormularioResena |
| `DELETE` | `/resenas/:id` | nada; el `id` va en la URL | `{}` si se elimina o error si no existe | 200 · 404 | DetalleRuta; cualquier visitante puede borrar una reseña |

### Cómo levantar la API en local

Esta sección se completará en la semana 12, cuando la API propia se construya con json-server.

### API pública externa

| Dato | Valor |
|---|---|
| Nombre | Open-Meteo Forecast API |
| URL base | `https://api.open-meteo.com/v1/` |
| Endpoint que usaremos | `/forecast?latitude={latitud}&longitude={longitud}&current=temperature_2m,wind_speed_10m,weather_code` |
| Requiere autenticación | No |
| Vista en que aparece | Inicio y vistas de rutas con widget de clima |
| Para qué le sirve al usuario | Consultar temperatura, viento y estado del cielo para preparar el recorrido. |
