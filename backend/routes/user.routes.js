import express from 'express';
import { regUser, loginUser, updateUser} from '../controllers/user_controller.js';
import asyncHandler from 'express-async-handler';
import { onlyAdmin, validUser } from '../middlewares.js';

export const userRouter = express.Router();



userRouter.post("/registro", asyncHandler(regUser)); // Ruta para registrar usuario
userRouter.post("/login", asyncHandler(loginUser)); // Ruta para loguear usuario
userRouter.post("/admin", asyncHandler(onlyAdmin), asyncHandler(loginUser));
userRouter.put("/actualizar-usuario",
  asyncHandler(validUser),
  asyncHandler(updateUser)); // Ruta para actualizar usuario

