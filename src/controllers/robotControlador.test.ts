import { RobotControlador } from './robotControlador';
import { RobotModelo, Direccion } from '../models/robotModelo';

describe('RobotControlador', () => {
  let robotControlador: RobotControlador;

  beforeEach(() => {
    // Configura un nuevo RobotControlador antes de cada prueba
    robotControlador = new RobotControlador();
  });

  it('debería inicializar el robot en la posición inicial (0, 0) mirando al Norte', () => {
    // Comprueba si el robot se inicializa correctamente
    const robotEsperado: RobotModelo = new RobotModelo(0, 0, Direccion.Norte);
    expect(robotControlador['robot']).toEqual(robotEsperado);
  });

  it('debería girar hacia la izquierda desde el Norte', () => {
    // Establece la dirección inicial del robot como Norte
    robotControlador['robot'].direccion = Direccion.Norte;

    // Llama al método de giraIzquierda para girar hacia la izquierda
    robotControlador['giraIzquierda']();

    // Comprueba si la dirección después de girar es Oeste (esperado)
    expect(robotControlador['robot'].direccion).toBe(Direccion.Oeste);
  });

  it('debería girar hacia la derecha desde el Norte', () => {
    // Establece la dirección inicial del robot como Norte
    robotControlador['robot'].direccion = Direccion.Norte;

    // Llama al método de giraDerecha para girar hacia la derecha
    robotControlador['giraDerecha']();

    // Comprueba si la dirección después de girar es Este (esperado)
    expect(robotControlador['robot'].direccion).toBe(Direccion.Este);
  });

  it('debería avanzar hacia el norte correctamente', () => {
    // Establece la dirección inicial del robot como Norte
    robotControlador['robot'].direccion = Direccion.Norte;

    // Llama al método de avanzar para moverse hacia el Norte
    robotControlador['avanzar']();

    // Comprueba si la posición después de avanzar es (0, 1) mirando al Norte
    const robotEsperado: RobotModelo = new RobotModelo(0, 1, Direccion.Norte);
    expect(robotControlador['robot']).toEqual(robotEsperado);
  });
});
