import { z } from 'zod';

export const createProductSerializer = z.object({
  nombre: z.string(),
  descripcion: z.string().optional(),
  opinion: z.string().optional(),
  precio: z.number().optional(),
  categoriaId: z.number(),
  marcaId: z.number(),
});

export const updateProductSerializer = z.object({
  id: z.number(),
  nombre: z.string(),
  description: z.string().optional(),
  opinion: z.string().optional(),
  precio: z.number().optional(),
});

export const createCategorySerializer = z.object({
  nombre: z.string(),
});

export const updateCategorySerializer = z.object({
  nombre: z.string(),
});

export const createBrandSerializer = z.object({
  nombre: z.string(),
});

export const updateBrandSerializer = z.object({
  nombre: z.string(),
});
