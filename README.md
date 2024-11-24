## Vue Spotify

## Descripción
Vue Spotify es una aplicación web desarrollada con Vue 3 que permite a los usuarios buscar y reproducir música utilizando la API de Spotify. La aplicación incluye vistas como `SearchView` y `HomeView`, y está dividida en componentes reutilizables para una mejor organización del código.

## Contenido del Proyecto
- **src/**: Carpeta principal del código fuente.
  - **assets/**: Imágenes y otros recursos estáticos.
  - **components/**: Componentes reutilizables de Vue.
  - **services/**: Servicios para manejar las solicitudes a la API de Spotify.
  - **views/**: Vistas principales de la aplicación.
  - **App.vue**: Componente raíz de la aplicación.
  - **main.js**: Archivo de entrada principal para la aplicación Vue.
- **public/**: Archivos públicos y estáticos.
- **.env.example**: Archivo de ejemplo para las variables de entorno.
- **package.json**: Archivo de configuración de npm con las dependencias del proyecto.

## Requisitos Previos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Cuenta de desarrollador de Spotify para obtener las credenciales de la API

## Instalación

### 1. Clonar el Repositorio
Primero, clona el repositorio desde GitHub a tu máquina local:
```bash
git clone https://github.com/jrgeorge89/VueSpotify.git
cd vue-spotify
```

### 2. Configurar las Variables de Entorno
Copia el archivo .env.example y renómbralo a .env. Luego, edita el archivo .env para agregar tus credenciales de Spotify:
Primero, clona el repositorio desde GitHub a tu máquina local:
```bash
cp .env.example .env
```

Abre el archivo .env y agrega tus credenciales:
```bash
VUE_APP_CLIENT_ID=tu-client-id
VUE_APP_CLIENT_SECRET=tu-client-secret
VUE_APP_REDIRECT_URI=http://localhost:8080/callback
```

### 3. Instalar Dependencias
Instala las dependencias del proyecto utilizando npm:
```bash
npm install
```

### 4. Ejecutar la Aplicación
Inicia la aplicación en modo de desarrollo:
```bash
npm run serve
```

## La aplicación estará disponible en http://localhost:8080.

- Haz clic en "Iniciar sesión con Spotify" para autenticarte.
- Usa la barra de búsqueda para buscar canciones, artistas o álbumes.
- Desplázate entre páginas para mayor visualización y contenido.
- En Ver Detalles puedes encontrar mayor información y reproducir la pista.
- Puedes agregar las canciones a favoritas para reproducir mas adelante.
- Disfruta de la música directamente desde la aplicación.
