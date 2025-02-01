import { connection } from "../connection.js";
import { 
    createProductSerializer,
    createCategorySerializer,
    createBrandSerializer,
    updateProductSerializer,
    updateCategorySerializer,
    updateBrandSerializer } from "./serializers/product_serializer.js";

// CREAR PRODUCTOS, CATEGORIAS Y MARCAS
export const createCategory = async (req, res) => {
  const catValidated = createCategorySerializer.parse(req.body);
  const newCategory = await connection.categoria.create({ data: catValidated });
  return res.json({
    message: "Categoria agregada a la BD.",
    content: newCategory,
  });
};

export const createBrand = async (req, res) => {
  const brandValidated = createBrandSerializer.parse(req.body);
  const newBrand = await connection.marca.create({ data: brandValidated });
  return res.json({
    message: "Marca agregada a la BD.",
    content: newBrand,
  });
};

export const createProduct = async (req, res) => {
  const productValidated = createProductSerializer.parse(req.body);
  const newProduct = await connection.producto.create({ data: productValidated });
  return res.json({
    message: "Producto agregado a la BD.",
    content: newProduct,
  });
};

// MOSTRAR TODOS PRODUCTOS, CATEGORIAS Y MARCAS
export const viewProducts = async (req, res) => {
  try{
    const allProducts = await connection.producto.findMany({
      select: {
        id: true,
        nombre: true,
        descripcion: true,
        opinion: true,
        precio: true,
        categoriaId: true,
        marcaId: true,
      },
    });
    return res.json({
      message: "Aqui se muestran los productos de la BD.",
      content: allProducts,
    });
  } catch {
    return res.status(500).json({
      message: "Error al intentar mostrar los productos.",
    });
  }
};

export const viewCategory = async (req, res) => {
  try {
    const allCategory = await connection.categoria.findMany({
      select: {
        id: true,
        nombre: true,
      },
    });
    return res.json({
      message: "Aqui mostramos todas la categorías de la BD",
      content: allCategory,
    });
  } catch {
    res.status(500).json({
      message: "No se pudo mostrar las categorías."
    });
  }
};

export const viewBrand = async (req, res) => {
  try {
    const allBrands = await connection.marca.findMany({
      select: {
        id: true,
        nombre: true,
      }
    });
    return res.json({
      message: "Aqui mostramos todas las marcas de la BD.",
      content: allBrands,
    });
  } catch {
    return res.status(500).json({
      message: "No se pudo mostrar las marcas.",
    });
  }
};

// ELIMINAR PRODUCTOS, CATEGORIAS Y MARCAS
export const deleteProductIDorName = async (req, res) => {
  try {
    // Obtengo el ID para buscar el producto
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Se requiere ID para eliminar.",
      });
    }
    // Hago la busqueda en la BD
    const productFinded = await connection.producto.findUnique({
      where: { id: parseInt(id) },
    });
    if (!productFinded) {
      return res.status(400).json({
        message: "Producto no encontrado o no existe en la BD.",
      });
    }
    // Procedor a eliminar el producto
    await connection.producto.delete({  where: { id: productFinded.id } });
    return res.json({
      message: "Producto eliminado de la BD.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error de conexión, no se pudo eliminar el producto.",
    });
  }
};
// export const deleteProductIDorName = async (req, res) => {
//   try{
//     // Obtengo los datos para buscar el producto
//     const { id, nombre } = req.body;
//     // const productFinded = await connection.producto.findUnique({ where: {id : parseInt(id)} });
//     let productFinded;
//     if(id) {
//       productFinded = await connection.producto.findUnique({ where : {id: parseInt(id)} });
//     } else if (nombre) {
//       productFinded = await connection.producto.findUnique({ where : nombre });
//     } else {
//       return res.status(400).json({
//         message: "Se requiere el id o el nombre del producto."
//       });
//     }
//     // Si el producto existe
//     if(!productFinded) {
//       return res.status(400).json({
//         message: "Producto no encontrado o no existe en la BD.",
//       });
//     }
//     // Procedo a eliminar el producto
//     await connection.producto.delete({ where : {id:productFinded.id} });
//     return res.json({
//       message: "Producto eliminado de la BD."
//     });
//   } catch (error) {
//     // Aqui valido en caso ocurra un error al eliminar
//     console.error(error);
//     return res.status(500).json({
//       message: "Error de conexion, no se pudo eliminar el producto.",
//     });
//   }
// };

export const deleteProduct = async (req, res) => {
  try {
    // Obtenemos el ID del producto
    const { id } = req.params;
    // Verifico si el producto existe
    const productFound = await connection.producto.findUnique({ where: {id : parseInt(id)} });
    if (!productFound) {
      return res.status(404).json({
        message: "Producto no encontrado o no existe en la BD.",
      });
    }
    // Aqui elimino el producto
    await connection.producto.delete({ where : { id: parseInt(id) },
    });
    return res.json({
      message: "Producto eliminado de la BD.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error de conexión. No se pudo eliminar el producto.",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try{
    const { id } = req.params;
    const catFinded = await connection.categoria.findUnique({ where: {id : parseInt(id)} });
    if(!catFinded) {
      return res.status(404).json({
        message: "Categoría no encontrada o no existe en la BD."
      });
    }
    // Aqui eliminamos el producto buscado
    await connection.categoria.delete({ where: {id: parseInt(id)} });

    return res.json({
      message: "Categoría eliminada de la BD."
    });
  } catch (error) {
    // Aqui valido en caso ocurra un error al eliminar
    console.error(error);
    return res.status(500).json({
      message: "Error de conexion, no se pudo eliminar la categoría.",
    });
  }
};

export const deleteBrand = async (req, res) => {
  try{
    const { id } = req.params;
    const brandFinded = await connection.marca.findUnique({ where: {id : parseInt(id)} });
    if(!brandFinded) {
      return res.status(404).json({
        message: "Marca no encontrada o no existe en la BD."
      });
    }
    // Aqui eliminamos la marca
    await connection.marca.delete({ where: {id: parseInt(id)} });

    return res.json({
      message: "Marca eliminada de la BD."
    });
  } catch (error) {
    // Aqui valido en caso ocurra un error al eliminar
    console.error(error);
    return res.status(500).json({
      message: "Error de conexion, no se pudo eliminar la marca.",
    });
  }
};


// ACTUALIZAR PRODUCTOS, CATEGORIAS Y MARCAS
export const updateProduct = async (req, res) => {
  const productValidated = updateProductSerializer.parse(req.body);
  const prodUpdate = await connection.producto.update({
    data: productValidated,
    select: {
      id: true,
      nombre: true,
      descripcion: true,
      opinion: true,
      precio: true,
    },
    where: { id : req.body.id }
  });
  return res.json({
    message: "Producto actualizado correctamente.",
    content: prodUpdate,
  });
};

export const updateCategory = async (req, res) => {
  const catValidated = updateCategorySerializer.parse(req.body);
  const catUpdate = await connection.categoria.update({
    data: catValidated,
    select: {
      id: true,
      nombre: true,
    },
    where: { id : req.body.id }
  });
  return res.json({
    message: "Categoría actualizada correctamente.",
    content: catUpdate,
  });
};

export const updateBrand = async (req, res) => {
  const brandValidated = updateBrandSerializer.parse(req.body);
  const brandUpdate = await connection.marca.update({
    data: brandValidated,
    select: {
      id: true,
      nombre: true,
    },
    where: { id : req.body.id }
  });
  return res.json({
    message: "Marca actualizada correctamente.",
    content: brandUpdate,
  });
};


// OBTENER LOS PRODUCTOS PARA MOSTRARLOS EN EL FRONT
export const viewProductsFront = async (req, res) => {
  try {
    const allProducts = await connection.producto.findMany({
      include : {
        marca: { select : { nombre : true} },
        categoria: { select: {nombre : true}},
      }
    });
    return res.json({
      message: "Productos de la BD.",
      content: allProducts,
    });
  } catch {
    return res.status(500).json({
      message: "Error de conexión, No se puede mostrar los productos."
    });
  }
};