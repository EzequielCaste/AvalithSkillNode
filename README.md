# AvalithSkillNode

Solución para el ejercicio de Node y Express de la Skill Factory de Avalith

1. Crear un endpoint que devuelva la fecha de hoy `/fecha`
2. Crear un endpoint que devuelva el contenido de un archivo de texto (fs y asincrónico) `/texto`
3. Crear un endpoint que al enviarle el nombre de una persona por el cuerpo del mensaje de una solicitud POST (`/`), responder con el mensaje;

```
"Buenos días X!"
```

Nota: Enviar la solicitud POST con el formato `raw` y en `JSON`:

```
{
  "nombre": "Ezequiel"
}
```

Realizar una API y que contenga un login donde el usuario al ingresar su nombre de usuario y contraseña devolverá un token con el cual podrá hacer un request otro endpoint GET y le responderá con un saludo con su nombre.

Para el endpoint de login, tener en cuenta los siguientes puntos:
No se requiere el uso de una base de datos se puede almacenar los datos del usuario en un archivo la contraseña deberá estar guardada de manera hasheada.
En caso de fallar se deberá enviar correctamente un mensaje de error al usuario.

- Sugiero utilizar JWT para el manejo de los toquen.
- Validar que se envíen correctamente los valores.
  No tiene que haber nada referido a front-end utilizar postman o similar para hacer pruebas.

Sobre el segundo endpoint, tiene que corresponder con "Buenos días x!" como en el ejercicio anterior pero en este caso el sistema debe usar el token para saber qué usuario es y en caso que el token no sea válido.
