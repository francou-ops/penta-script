# Penta Script — EcoRuta Temuco

Página web informativa sobre rutas y emprendimientos de turismo sustentable en La Araucanía.

## Integrantes y roles (Sprint actual)

| Nombre             | Rol ágil      |
|--------------------|---------------|
| Franco Lillo       | Product owner |
| Cristóbal Dapellus | QA            |
| Benjamín Pedraza   | Dev           |
| José Sepúlveda     | Dev           |
| Josefa Sotomayor   | Scrum Master  |

## Tecnologías utilizadas

- HTML5 (estructura semántica)
- CSS3 (diseño responsivo, mobile first)
- JavaScript (todavía no se usa, se integrará más adelante)

## Cómo ejecutar el proyecto

No hay que instalar nada. Se clona el repositorio y se abre `index.html` en el navegador.

```bash
git clone https://github.com/francou-ops/penta-script.git
```

También se puede abrir con la extensión Live Server de VS Code.

## Páginas

| Página | Archivo | Contenido |
|--------|---------|-----------|
| Inicio | `index.html` | Las tres rutas, clima de ejemplo, contacto de emergencia y emprendimientos cercanos |
| Ruta fácil | `pages/vista_1.html` | Sendero del Bosque: ruta ficticia de ejemplo y recomendaciones |
| Ruta moderada | `pages/vista_2.html` | Detalle del Sendero Volcán Villarrica y recomendaciones |
| Ruta difícil | `pages/vista_3.html` | Travesía de las Cumbres: ruta ficticia de ejemplo y recomendaciones |

## Navegación del prototipo

Las dificultades se enlazan con HTML (`<a href="...">`), sin JavaScript.
La portada muestra las tres rutas y cada ficha permite cambiar de dificultad o volver al inicio.
Las rutas fácil y difícil son ejemplos ficticios para la maqueta académica. El clima es ilustrativo, sin actualización en tiempo real.

## Estado del proyecto

- Sprint actual: Sprint 1
- Última actualización: 15 de octubre de 2026

## Tablero Trello

Enlace al tablero: https://trello.com/b/XcS33uFd/penta-script

## Enlace de despliegue

(agregar enlace una vez desplegado)

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
├── img/                # Imágenes del sitio
├── .gitignore
└── README.md
```
