import { connection } from "../connection.js";

// BUSQUEDA POR ID(PRODUCTO, CATEGORIA, MARCA)
export const searchProduct = async (req, res) => {
  try {
    // Convierto el id a numero
    const productId = parseInt(req.params.id);
    const prodFinded = await connection.producto.findUnique({
      where: { id : productId },
    });
    // Consulto si el producto existe o no en la BD
    if(!prodFinded){
      return res.status(404).json({
        message: "El producto no se encuentra o no existe en la BD."
      });
    }
    // Encuentro el producto y lo muestro
    return res.json({
      message: "Producto encontrado.",
      content: prodFinded,
    });
  } catch {
    return res.status(500).json({
      message: "Error al mostrar solicitud."
    });
  }
};

export const searchCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const catFinded = await connection.categoria.findUnique({
    where: { id : categoryId },
  });
  if(!catFinded){
    return res.status(404).json({
      message: "La categoría no se encuentra o no existe en la BD."
    });
  }
  return res.json({
    message: "Categoría encontrada.",
    content: catFinded,
  });
};

export const searchBrand = async (req, res) => {
  const brandId = parseInt(req.params.id);
  const brandFinded = await connection.marca.findUnique({
    where: { id : brandId },
  });
  if(!brandFinded){
    return res.status(404).json({
      message: "La marca no se encuentra o no existe en la BD."
    });
  }
  return res.json({
    message: "Marca encontrada.",
    content: brandFinded,
  });
};