import { Request, Response } from 'express';
import { RobotModelo, Direccion } from '../models/robotModelo';
import { ValidationError } from '../middleware/errorHandler';

// Controlador para el robot
export class RobotControlador {
  private robot: RobotModelo;

  constructor() {
    // Inicializa el robot en la posición inicial (0, 0) mirando al Norte ('N').
    this.robot = new RobotModelo(0, 0, Direccion.Norte);
  }

  // Manejo de las solicitudes de movimiento del robot
  public movimientoRobot(req: Request, res: Response) {
    try {
      const ordenes: string = req.body.ordenes;
      this.procesarOrdenes(ordenes);

      const { x, y, direccion } = this.robot;
      res.json({ x, y, direccion });
    } catch (error) {
      // Manejo de errores personalizado
      if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
      }
      // Error interno del servidor
      return res.status(500).json({ error: 'Error interno' });
    }
  }

  // Procesa las órdenes enviadas al robot
  private procesarOrdenes(ordenes: string) {
    for (const orden of ordenes) {
      if (!this.ejecutarOrden(orden)) {
        // Si la orden no es válida, lanza una excepción
        throw new ValidationError('Orden no válida. Por favor, verifica las órdenes.');
      }
    }
  }

  // Ejecuta una orden para el robot
  private ejecutarOrden(orden: string): boolean {
    // Define las acciones posibles y las ejecuta
    const acciones: Record<string, () => boolean> = {
      L: () => this.giraIzquierda(),
      R: () => this.giraDerecha(),
      M: () => this.avanzar(),
    };

    if (acciones.hasOwnProperty(orden)) {
      // Ejecuta la acción y devuelve true si es válida
      return acciones[orden]();
    }
    // Si la orden no es válida, devuelve false
    return false;
  }

  // Gira el robot a la izquierda
  private giraIzquierda(): boolean {
    const direcciones: Record<Direccion, Direccion> = {
      [Direccion.Norte]: Direccion.Oeste,
      [Direccion.Oeste]: Direccion.Sur,
      [Direccion.Sur]: Direccion.Este,
      [Direccion.Este]: Direccion.Norte,
    };
    this.robot.direccion = direcciones[this.robot.direccion];
    return true; 
  }

  // Gira el robot a la derecha
  private giraDerecha(): boolean {
    const direcciones: Record<Direccion, Direccion> = {
      [Direccion.Norte]: Direccion.Este,
      [Direccion.Este]: Direccion.Sur,
      [Direccion.Sur]: Direccion.Oeste,
      [Direccion.Oeste]: Direccion.Norte,
    };
    this.robot.direccion = direcciones[this.robot.direccion];
    return true; 
  }

  // Avanza el robot en la dirección actual
  private avanzar(): boolean {
    const movimientos: Record<Direccion, [number, number]> = {
      [Direccion.Norte]: [0, 1],
      [Direccion.Sur]: [0, -1],
      [Direccion.Este]: [1, 0],
      [Direccion.Oeste]: [-1, 0],
    };
    const [dx, dy] = movimientos[this.robot.direccion];
    this.robot.x = (this.robot.x + dx + 10) % 10;
    this.robot.y = (this.robot.y + dy + 10) % 10;
    return true; 
  }
}
