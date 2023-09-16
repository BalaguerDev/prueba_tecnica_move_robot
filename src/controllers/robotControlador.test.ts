import { RobotControlador } from './robotControlador';
import { RobotModelo } from '../models/robotModelo';

describe('RobotControlador', () => {
    let robotControlador: RobotControlador;
  
    beforeEach(() => {
      robotControlador = new RobotControlador();
    });
  
    it('debería inicializar el robot en (0, 0, N)', () => {
      const robot: RobotModelo = robotControlador['robot'];
      expect(robot.x).toBe(0);
      expect(robot.y).toBe(0);
      expect(robot.direccion).toBe('N');
    });
  
    it('debería girar a la izquierda correctamente', () => {
      robotControlador['robot'].direccion = 'N';
      robotControlador['giraIzquierda']();
      expect(robotControlador['robot'].direccion).toBe('W');
    });
  
    it('debería girar a la derecha correctamente', () => {
      robotControlador['robot'].direccion = 'N';
      robotControlador['giraDerecha']();
      expect(robotControlador['robot'].direccion).toBe('E');
    });
  
    it('debería avanzar hacia el norte correctamente', () => {
      robotControlador['robot'].direccion = 'N';
      robotControlador['avanzar']();
      expect(robotControlador['robot'].x).toBe(0);
      expect(robotControlador['robot'].y).toBe(1);
    });
  
  });