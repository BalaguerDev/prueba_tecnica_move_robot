import { Router } from 'express';
import { RobotControlador } from '../controllers/robotControlador';

const router = Router();
const robotControlador = new RobotControlador();

router.post('/mover', ( req, res ) => {
    robotControlador.movimientoRobot( req, res );
})

export default router;