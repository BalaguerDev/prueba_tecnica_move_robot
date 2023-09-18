import { Request, Response } from 'express';
import { RobotModelo } from '../models/robotModelo';

export class RobotControlador {
    private robot: RobotModelo;

    constructor() {
        // Inicializamos el robot en la posición inicial (0, 0) mirando al Norte ('N').
        this.robot = new RobotModelo(0, 0, 'N');
    }

    public movimientoRobot(req: Request, res: Response): void {
        try {

            const ordenes: string = req.body.ordenes;

            for (const orden of ordenes) {
                this.procesarOrden(orden);
            }

            const { x, y, direccion } = this.robot;
            res.json({ x, y, direccion });

        } catch (error) {
            res.status(500).json({ error: 'Error interno' })
        }
    }

    private procesarOrden(orden: string): void {
        // Utilizamos un objeto de mapeo para determinar qué acción tomar en función de la orden.
        const acciones: Record<string, () => void> = {
            L: () => this.giraIzquierda(),
            R: () => this.giraDerecha(),
            M: () => this.avanzar(),
        };

        // Verificamos si la orden es válida y ejecutamos la acción correspondiente.
        if (acciones.hasOwnProperty(orden)) {
            acciones[orden]();
        }
    }

    private giraIzquierda(): void {
        const direcciones: Record<string, 'N' | 'W' | 'S' | 'E'> = {
            N: 'W',
            W: 'S',
            S: 'E',
            E: 'N',
        };
        this.robot.direccion = direcciones[this.robot.direccion];
    }

    private giraDerecha(): void {
        const direcciones: Record<string, 'N' | 'W' | 'S' | 'E'> = {
            N: 'E',
            E: 'S',
            S: 'W',
            W: 'N',
        };
        this.robot.direccion = direcciones[this.robot.direccion];
    }

    private avanzar(): void {
        const movimientos: Record<string, [number, number]> = {
            N: [0, 1],
            S: [0, -1],
            E: [1, 0],
            W: [-1, 0],
        };
        const [dx, dy] = movimientos[this.robot.direccion];
        this.robot.x = (this.robot.x + dx + 10) % 10;
        this.robot.y = (this.robot.y + dy + 10) % 10;
    }
}
