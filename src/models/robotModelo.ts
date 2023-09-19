// Define un enum para las direcciones posibles
export enum Direccion {
  Norte = 'N',
  Sur = 'S',
  Este = 'E',
  Oeste = 'W',
}

// Define una clase para representar el modelo del robot
export class RobotModelo {
  constructor(
    public x: number, 
    public y: number, 
    public direccion: Direccion
  ) {}
}