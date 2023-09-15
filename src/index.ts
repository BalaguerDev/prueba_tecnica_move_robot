import express from 'express';
import { RobotControlador } from './controllers/robotControlador';
import robotRutas from './routes/robotRutas';

const app = express();
const port = 3000;
const robotControlador = new RobotControlador();

app.use(express.json());


app.use('/api/robot', robotRutas);

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});