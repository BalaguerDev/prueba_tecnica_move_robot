import { Request, Response, NextFunction } from 'express';

// Define una clase personalizada para errores de validación
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Define una clase personalizada para errores internos del servidor
export class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerError';
  }
}

// Middleware de manejo de errores
export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', error);

  if (error instanceof ValidationError) {
    return res.status(400).json({ error: error.message });
  } else if (error instanceof InternalServerError) {
    return res.status(500).json({ error: error.message });
  }

  res.status(500).json({ error: 'Error interno del servidor' });
}
