import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user.routes.js';
import { productRouter } from './routes/product.routes.js';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

const servidor = express();

// servidor.use(cors()); // Para permitir conexiones entre frontend y backend
servidor.use(express.json()); // Para que el servidor entienda JSON

//rutas front
servidor.use(cors({
  // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos que se permiten
  origin: 'http://localhost:5173', // Ruta del frontend
  // allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Cabeceras permitidas  
  credentials: true,
}));

// Agregando rutas(Routes)
servidor.use(userRouter);
servidor.use(productRouter);



servidor.use((error, req, res, next) => { // Middleware para manejar errores
  if(error instanceof ZodError) {
    return res.status(400).json({
      message: "Datos no validos",
      // content: error.errors,
    });
  }
  if(error instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(404).json({
      message: `El ${error.meta.modelName} no existe.`,
    });
  }
  console.log(error);
  return res.status(400).json({
    message: "Algo salió mal.",
  });
  
});

servidor.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});