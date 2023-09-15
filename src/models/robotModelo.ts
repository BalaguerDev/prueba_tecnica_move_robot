export class RobotModelo {

    x: number;
    y: number;
    direccion: 'N' | 'S' | 'E' | 'W';

    constructor(x: number, y: number, direccion: 'N' | 'S' | 'E' | 'W') {
        this.x = x;
        this.y = y;
        this.direccion = direccion;
    }
}
