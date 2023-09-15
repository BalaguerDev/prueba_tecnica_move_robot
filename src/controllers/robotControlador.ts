import { Request, Response } from 'express';
import { RobotModelo } from '../models/robotModelo';

export class RobotControlador {
    private robot: RobotModelo;

    constructor () {
        this.robot = new RobotModelo (0, 0, 'N');
    }

    public movimientoRobot (req: Request, res: Response ): void {
        const ordenes: string = req.body.ordenes;

        for ( const orden of ordenes) {
            if (orden === 'L' ) {
                this.giraIzquierda();
            } else if (orden === 'R' ){
                this.giraDerecha();
            } else if (orden === 'M' ){
                this.avanzar();
            }
        }
         res.json ({
            x: this.robot.x,
            y: this.robot.y,
            direccion: this.robot.direccion,

         })
    }

    private giraIzquierda (): void {
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

    private giraDerecha (): void {
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
