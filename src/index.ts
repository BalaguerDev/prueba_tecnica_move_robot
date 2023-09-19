import express from 'express';
import robotRutas from './routes/robotRutas';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/robot', robotRutas);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
