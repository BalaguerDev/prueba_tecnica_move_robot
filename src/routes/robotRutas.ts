import { Router } from 'express';
import { RobotControlador } from '../controllers/robotControlador';
import { validarOrdenes } from '../middleware/ordenValidation';

const router = Router();
const robotControlador = new RobotControlador();

// Ruta para mover el robot. 
// Utiliza el middleware de validación de órdenes antes de llamar al controlador para que sea correcta.
router.post('/mover', validarOrdenes, (req, res) => {
  robotControlador.movimientoRobot(req, res);
});

export default router;
