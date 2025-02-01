import { z } from 'zod';
import { TYPE_USER } from '@prisma/client';

export const regUserSerializer = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string().email(),
  password: z.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*&%?#])[A-Za-z\d@$!*&%?#]{8,}$/
  ),
  typeUser: z.enum([
    TYPE_USER.ADMIN,
    TYPE_USER.CLIENTE,
    TYPE_USER.MODERADOR,
  ]),
});

export const loginUserSerializer = z.object({
  email: z.string().email(),
  password: z.string(),
  // typeUser: z.enum([
  //   TYPE_USER.ADMIN,
  //   TYPE_USER.CLIENTE,
  //   TYPE_USER.MODERADOR,
  // ]),
});

export const updateUserSerializer = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string().email(),
});

