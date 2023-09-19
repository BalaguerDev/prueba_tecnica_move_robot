import { Request, Response, NextFunction } from 'express';
import { ValidationError } from './errorHandler';
import Joi from 'joi';

// Define un esquema de validación utilizando Joi
const ordenesSchema = Joi.string()
  .regex(/^[MLR]*$/)
  .message('Orden no válida. Solo se permiten los caracteres M, L y R.')
  .custom((value: string) => {
    if (/(L{4,}|R{4,})/.test(value)) {
      throw new Error('Orden no válida. No está permitido ingresar 4 cambios de sentido igual ya que el robot mira hacia el mismo destino');
    }
    return value;
  })
  .message('Orden no válida. Por favor, verifica las órdenes.');

// Middleware para validar las órdenes antes de procesarlas
export function validarOrdenes(req: Request, res: Response, next: NextFunction) {
  const { error } = ordenesSchema.validate(req.body.ordenes);

  if (error) {
    // Si hay un error de validación, se lanza una excepción
    throw new ValidationError(error.message);
  }

  next();
}
