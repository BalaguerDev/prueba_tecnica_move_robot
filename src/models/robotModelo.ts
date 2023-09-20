// Define un enum para las direcciones posibles
//[FEEDBACK](positivo): Buena ídea implementar un enum par las direcciones, mejora mucho la legibilidad del código
export enum Direccion {
  Norte = 'N',
  Sur = 'S',
  Este = 'E',
  Oeste = 'W',
}

// Define una clase para representar el modelo del robot
//[FEEDBACK](mejora): El modelo debería llamarse Robot
export class RobotModelo {
  constructor(
    public x: number, 
    public y: number, 
    public direccion: Direccion
  ) {}
}