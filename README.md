# Prueba Técnica: INCAPTO - API de Control de Robot

Este repositorio contiene una prueba técnica de diseño de un API en TypeScript para controlar un robot en una cuadrícula 10x10. El robot acepta comandos de movimiento (L, R, M) y devuelve su posición final.

## Inicio Rápido

### Clonar el Repositorio

```bash
git clone https://github.com/BalaguerDev/prueba_tecnica_move_robot.git
cd prueba_tecnica_move_robot
Instalar Dependencias
Asegúrate de tener Node.js y npm instalados en tu sistema.

bash
Copy code
npm install
Ejecutar el Servidor
bash
Copy code
npm start
La API estará disponible en http://localhost:3000/api/robot.

Uso de la API
Mover el Robot
Ruta: /api/robot/mover

Método: POST

Cuerpo de la Solicitud:

json
Copy code
{
  "ordenes": "LMMMRMMRRMMML"
}
Respuesta Exitosa:

json
Copy code
{
  "x": 2,
  "y": 3,
  "direccion": "W"
}
Errores
En caso de órdenes no válidas, recibirás una respuesta con el código de estado 400 y un mensaje de error.
En caso de errores internos, recibirás una respuesta con el código de estado 500 y un mensaje de error genérico.
Autor
Alex Balaguer Reza (BalaguerDev)
Dependencias
express: ^4.18.2
@types/express: ^4.17.17
Dependencias de Desarrollo
jest: ^29.7.0
@types/jest: ^29.5.5
ts-jest: ^29.1.1
typescript: ^5.2.2
