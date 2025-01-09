# Proyecto Express con TypeScript

Este proyecto está basado en Express con TypeScript y expone una serie de APIs para interactuar con los datos de usuarios y tareas.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

Para instalar las dependencias del proyecto, usa el siguiente comando:

### npm install

## Ejecutar el proyecto

Una vez que hayas instalado todas las dependencias, puedes iniciar el servidor en modo desarrollo con:

### npm run dev

Esto levantará el servidor en http://localhost:5000.

## API Endpoints

A continuación se describen los principales endpoints que están disponibles en la API:

### 1. Obtener todos los usuarios

- **URL**: `http://localhost:5000/api/users`
- **Método**: `GET`
- **Descripción**: Obtiene todos los usuarios registrados.

### 2. Crear un nuevo usuario

- **URL**: `http://localhost:5000/api/users`
- **Método**: `POST`
- **Cuerpo de la solicitud** (JSON):

<pre>
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
</pre>

- **Descripción**: Crea un nuevo usuario con los datos proporcionados.

### 3. Actualizar un usuario existente

- **URL**: `http://localhost:5000/api/users/{userId}`
- **Método**: `PUT`
- **Cuerpo de la solicitud** (JSON):

<pre>
{
  "email": "john.doe@exmaple.com"
}
</pre>

- **Descripción**: Actualiza los datos del usuario con el `userId` especificado.

### 4. Eliminar un usuario

- **URL**: `http://localhost:5000/api/users/{userId}`
- **Método**: `DELETE`
- **Descripción**: Elimina al usuario con el `userId` proporcionado.

### 5. Obtener las tareas de un usuario

- **URL**: `http://localhost:5000/api/tasks?userId={userId}`
- **Método**: `GET`
- **Descripción**: Obtiene todas las tareas asociadas a un usuario específico.

### 6. Obtener las tareas de un usuario con paginación

- **URL**: `http://localhost:5000/api/tasks?userId={userId}&page=1&limit=10`
- **Método**: `GET`
- **Descripción**: Obtiene las tareas del usuario con paginación, puedes especificar el número de página (`page`) y el límite de tareas por página (`limit`).

---

## Pruebas con Postman

Este proyecto tiene una colección de Postman para probar los endpoints fácilmente. Puedes importar la colección desde el siguiente enlace:

[Importar colección de Postman](endpoints.postman_collection.json)

Una vez que importes la colección, podrás hacer solicitudes a las siguientes rutas:

- `GET http://localhost:5000/api/users`
- `POST http://localhost:5000/api/users`
- `PUT http://localhost:5000/api/users/{userId}`
- `DELETE http://localhost:5000/api/users/{userId}`
- `GET http://localhost:5000/api/tasks?userId={userId}`
- `GET http://localhost:5000/api/tasks?userId={userId}&page=1&limit=10`
