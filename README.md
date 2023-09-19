
# Prueba Técnica: INCAPTO - API de Control de Robot

Este repositorio contiene una prueba técnica que consiste en diseñar un API en TypeScript para controlar un robot en una cuadrícula de 10x10. El robot es capaz de recibir comandos de movimiento (L, R, M) y devolver su posición final.

# Inicio Rápido

## Clonar el Repositorio

```bash
git clone https://github.com/BalaguerDev/prueba_tecnica_move_robot.git
cd prueba_tecnica_move_robot
```

## Instalar Dependencias
Asegúrate de tener Node.js y npm instalados en tu sistema.
```bash
npm install
```

## Ejecutar el Servidor
Asegúrate de tener Node.js y npm instalados en tu sistema.
```bash
npm start
```

La API estará disponible en http://localhost:3000/api/robot.

# Uso de la API
## Mover el Robot
Ruta: /api/robot/mover
Método: POST
Cuerpo de la Solicitud:
```bash
{
  "ordenes": "LMMMRMMRRMMML"
}
```
Respuesta Exitosa:
```bash
{
  "x": 2,
  "y": 3,
  "direccion": "W"
}
```

## Dependencias
- **express: ^4.18.2:** Un framework web de Node.js que facilita la creación de aplicaciones web y APIs.
- **@types/express: ^4.17.17:** Tipos TypeScript para Express, que proporcionan información de tipos para un desarrollo más seguro.
- **joi: ^17.10.2:** Una biblioteca de validación de datos para Node.js y el navegador, que se utiliza para validar las órdenes en la API.

## Dependencias de Desarrollo
- **@types/jest: ^29.5.5:** Tipos TypeScript para Jest, que proporcionan información de tipos para escribir pruebas en TypeScript.
- **jest: ^29.7.0:** El marco de pruebas Jest, utilizado para escribir y ejecutar pruebas unitarias y de integración.
- **ts-jest: ^29.1.1:** Un transformador TypeScript para Jest, que permite que Jest ejecute pruebas escritas en TypeScript.
- **typescript: ^5.2.2:** El compilador de TypeScript, utilizado para compilar código TypeScript en JavaScript.

## Errores
En caso de órdenes no válidas, recibirás una respuesta con el código de estado 400 y un mensaje de error.
En caso de errores internos, recibirás una respuesta con el código de estado 500 y un mensaje de error genérico.

## Autor
Alex Balaguer Reza (BalaguerDev)