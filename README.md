# Aplicación ExpressJS – API de Lista de Tareas
Este reto consiste en desarrollar una aplicación básica con ExpressJS que permita gestionar una lista de tareas a través de una API REST.
El objetivo es practicar el manejo de rutas HTTP (GET, POST, PUT, DELETE), almacenamiento en memoria y pruebas con herramientas como Postman o Insomnia.

# Reto Semana 16
Implementar una aplicación que cumpla con los siguientes requisitos:
- Agregar una tarea a la lista (ruta POST /tareas).
- Ver todas las tareas de la lista (ruta GET /tareas).
- Marcar una tarea como completada (ruta PUT /tareas/:id).
- Eliminar una tarea de la lista (ruta DELETE /tareas/:id).
- Almacenar las tareas en memoria dentro de la aplicación.
- Probar todas las rutas con Insomnia o Postman para confirmar su correcto funcionamiento.

# Tecnologías utilizadas
- Node.js
- ExpressJS
- JavaScript (CommonJS)
- Middleware express.json() para leer JSON
- Pruebas con Thunder Client

# Estructura del Proyecto
```
retoSemana16/
├── node_modules/
├── app.js              ← Punto de entrada principal
├── package.json
├── package-lock.json
├── .gitignore
```

# Cómo ejecutar
**1. Instala dependencias:**
```
npm install express
```

**2. Ejecuta el servidor:**
```
npm run start:dev
```

**3. Abre tu navegador o cliente HTTP:**
```
http://localhost:3000
```

# Rutas disponibles y Resultados
**GET /**

- Muestra mensaje de bienvenida.
<img width="1550" height="220" alt="image" src="https://github.com/user-attachments/assets/bf7178a5-55d4-417f-af1b-0ffdd7377fb5" />


**GET /tareas**

- Devuelve todas las tareas almacenadas.
<img width="1546" height="225" alt="image" src="https://github.com/user-attachments/assets/dfef4c59-89a2-4007-a334-f902cb8b9182" />
<img width="1544" height="352" alt="image" src="https://github.com/user-attachments/assets/099af538-2f47-4052-aa00-7bd6787eadab" />


**POST /tareas**

- Agrega una nueva tarea a la lista.
**Body JSON:**
```
{
  "titulo": "Estudiar Node.js"
}
```
<img width="1547" height="401" alt="image" src="https://github.com/user-attachments/assets/18052009-fe3f-43e9-82c8-34b59991495f" />


**PUT /tareas/:id**

- Marca una tarea como completada.
<img width="1546" height="334" alt="image" src="https://github.com/user-attachments/assets/8fdde832-065b-490e-9707-fcae820ff99f" />


**DELETE /tareas/:id**

- Elimina una tarea específica.
<img width="1549" height="336" alt="image" src="https://github.com/user-attachments/assets/3df575ca-a9d7-4387-9624-05ef43812d47" />
