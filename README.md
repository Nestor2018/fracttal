# Fracttal

## Introducción

Fracttal es un proyecto que permite la creación y login de usuarios para acceder a una plataforma de administración de empleados. Los usuarios tienen la capacidad de listar, crear, editar y eliminar empleados desde la aplicación.

## Características

- La información de empleados se almacena en Firebase, una plataforma en la nube de Google.
- La autenticación de usuarios también se realiza mediante Firebase, lo que garantiza un inicio de sesión seguro y confiable.
- Todas las acciones realizadas con los empleados quedan registradas en una tabla de registros, accesible desde la aplicación.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Redux Toolkit: Librería de gestión de estado para aplicaciones React.
- React Router DOM: Librería para manejar el enrutamiento en aplicaciones React.

## Persistencia de datos

- La aplicación utiliza persistencia de datos para mantener el estado de los empleados y los registros de acciones, lo que garantiza que la información esté disponible incluso si se cierra la aplicación o se actualiza la página.

## Configuración del archivo .env

- El proyecto utiliza un archivo .env para almacenar las variables de entorno. En este archivo, se debe agregar la siguiente key de Firebase:
`VITE_APP_API_KEY_FIREBASE=AIzaSyA9iKmosAmX24jaLfS7NzelwpYK6cVe9RI`
- Asegúrate de agregar esta key de Firebase en el archivo .env para que la aplicación pueda conectarse correctamente con Firebase.

## Requisitos

- Node.js versión 18.5.0 o superior.
- npm versión 9.4.2 o superior, o Yarn versión 1.22.19 o superior.

## Instalación

Para instalar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

`npm install`

`yarn install`

## Uso

1. En la primera pantalla, inicia sesión con tu correo electrónico y contraseña. Si no tienes una cuenta, puedes crear una con tu correo electrónico y contraseña. Las contraseñas están encriptadas con SHA256 para garantizar la seguridad de los usuarios.
3. la información de los empleados no esta restringida por a el usuario que esta logueado, si 2 usuarios se loguean ambos podran ver y editar la información de los empleados.
2. Una vez en la aplicación, verás una tabla con la lista de empleados, que muestra su ID, nombre y descripción del cargo. También encontrarás botones para ver el detalle de cada empleado y para eliminarlos.
3. Si accedes al detalle de un empleado, verás un formulario que te permite editar su nombre y cargo.
4. En la pantalla principal, además de la lista de empleados, encontrarás botones para crear nuevos empleados, cerrar sesión y ver los registros de acciones realizadas en la aplicación.
5. Los registros de acciones contienen información como la dirección IP desde donde se realizó la acción, el tipo de acción, la hora y el usuario que la realizó.

## Contacto

Si tienes alguna pregunta o comentario sobre el proyecto, no dudes en ponerte en contacto: 
Correo electrónico: neybluenefa@gmail.com
