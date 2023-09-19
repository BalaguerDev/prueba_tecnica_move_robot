import express from 'express';
import robotRutas from './routes/robotRutas';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/robot', robotRutas);

// Ruta para manejar solicitudes a rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});