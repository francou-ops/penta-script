# Penta Script — EcoRuta Temuco

Página web informativa sobre rutas y emprendimientos de turismo sustentable en La Araucanía.

## Integrantes y roles (Sprint actual)

| Nombre             | Rol ágil      |
|--------------------|---------------|
| Franco Lillo       | QA            |
| Cristóbal Dapellus | Dev           |
| Benjamín Pedraza   | Scrum Master  |
| José Sepúlveda     | Product Owner |

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
