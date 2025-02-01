import express from 'express';
import {
  regUser,
  loginUser,
  updateUser,
  regUserClient} from '../controllers/user_controller.js';
import asyncHandler from 'express-async-handler';
import {
  validarAdmin,
  validUser } from '../middlewares.js';

export const userRouter = express.Router();


// Ruta para registrar usuario
userRouter.post("/registro-admin", asyncHandler(regUser)); 
 // Ruta para registrar usuario CLIENTE (SOLO FRONT)
userRouter.post("/registro", asyncHandler(regUserClient));
// Ruta para loguear usuario
userRouter.post("/login", asyncHandler(loginUser)); 
// Para loguar solo user ADMIN a la vista administrador
// userRouter.post("/admin", asyncHandler(validarAdmin), asyncHandler(loginUser));
// Para loguear al cliente a la vista productos
// userRouter.post("/", asyncHandler(loginUser));
userRouter.put("/actualizar-usuario",
  asyncHandler(validUser),
  asyncHandler(updateUser)); // Ruta para actualizar usuario

