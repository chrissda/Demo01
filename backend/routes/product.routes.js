import express from "express";
import {
  createCategory,
  createBrand,
  createProduct, 
  updateProduct,
  deleteProductIDorName,
  viewProducts,
  viewCategory,
  viewBrand,
  updateCategory,
  updateBrand,
  deleteBrand,
  deleteCategory,
  viewProductsFront} from "../controllers/product_controller.js";
import asyncHandler from "express-async-handler";
import {
  searchBrand,
  searchCategory,
  searchProduct } from "../controllers/vsearch_item.js";

export const productRouter = express.Router();

// Rutas relacionadas a productos, categorias y marcas
productRouter.post("/crear-categoria", asyncHandler(createCategory));
productRouter.post("/crear-marca", asyncHandler(createBrand));
productRouter.post("/crear-producto", asyncHandler(createProduct));
productRouter.get("/productos/", asyncHandler(viewProducts));
productRouter.get("/categorias", asyncHandler(viewCategory));
productRouter.get("/marcas", asyncHandler(viewBrand));
productRouter.get("/productos/:id", asyncHandler(searchProduct));
productRouter.get("/categorias/:id", asyncHandler(searchCategory));
productRouter.get("/marcas/:id", asyncHandler(searchBrand));
productRouter.put("/actualizar-producto", asyncHandler(updateProduct));
productRouter.put("/actualizar-categoria", asyncHandler(updateCategory));
productRouter.put("/actualizar-marca", asyncHandler(updateBrand));
productRouter.delete("/eliminar-producto/:id", asyncHandler(deleteProductIDorName));
productRouter.delete("/eliminar-marca/:id", asyncHandler(deleteBrand));
productRouter.delete("/eliminar-categoria/:id", asyncHandler(deleteCategory));
productRouter.get("/listar-productos", asyncHandler(viewProductsFront));