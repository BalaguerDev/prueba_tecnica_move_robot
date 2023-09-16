import { Request, Response } from 'express';
import { RobotModelo } from '../models/robotModelo';

export class RobotControlador {
    private robot: RobotModelo;

    constructor() {
        // Inicializamos el robot en la posición inicial (0, 0) mirando al Norte ('N').
        this.robot = new RobotModelo(0, 0, 'N');
    }

    public movimientoRobot(req: Request, res: Response): void {
        // Obtenemos las órdenes del cuerpo de la solicitud HTTP.
        const ordenes: string = req.body.ordenes;

        // Iteramos a través de cada orden recibida y las procesamos.
        for (const orden of ordenes) {
            this.procesarOrden(orden);
        }

        // Respondemos con la posición y dirección final del robot en formato JSON.
        res.json({
            x: this.robot.x,
            y: this.robot.y,
            direccion: this.robot.direccion,
        });
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
        switch (this.robot.direccion) {
            case 'N':
                this.robot.direccion = 'W';
                break;
            case 'W':
                this.robot.direccion = 'S';
                break;
            case 'S':
                this.robot.direccion = 'E';
                break;
            case 'E':
                this.robot.direccion = 'N';
                break;
        }
    }

    private giraDerecha(): void {
        
        switch (this.robot.direccion) {
            case 'N':
                this.robot.direccion = 'E';
                break;
            case 'E':
                this.robot.direccion = 'S';
                break;
            case 'S':
                this.robot.direccion = 'W';
                break;
            case 'W':
                this.robot.direccion = 'N';
                break;
        }
    }

    private avanzar(): void {
        switch (this.robot.direccion) {
            case 'N':
                this.robot.y = (this.robot.y + 1) % 10;
                break;
            case 'S':
                this.robot.y = (this.robot.y - 1 + 10) % 10;
                break;
            case 'E':
                this.robot.x = (this.robot.x + 1) % 10;
                break;
            case 'W':
                this.robot.x = (this.robot.x - 1 + 10) % 10;
                break;
        }
    }
}
