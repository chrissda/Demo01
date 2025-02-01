import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react"; 


const TableProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/listar-productos")
      .then((response) => response.json())
      .then((data) => setProducts(data.content))
      .catch((error) => console.error("Error al mostrar:", error));
  }, []);

  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí podrías abrir un modal o redirigir a una vista de edición
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://127.0.0.1:3000/eliminar-producto/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (response.ok) {
          alert("Producto eliminado correctamente");
          setProducts(products.filter(product => product.id !== id)); // Eliminar del estado
        } else {
          alert("Error al eliminar el producto");
        }
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };



  return (
    // <table className="text-indigo-900 table-fixed w-full text-left whitespace-no-wrap" border="1">
    <table className="w-full border-collapse borde-2 border-indigo-900">
      <thead>
        <tr className="bg-indigo-900 border-indigo-900">
          <th className="p-2 border border-indigo-900 w-[5%] text-white">ID</th>
          <th className="p-2 border border-indigo-900 text-white">Nombre Producto</th>
          <th className="p-2 border border-indigo-900 text-white">Descripción</th>
          <th className="p-2 border border-indigo-900 text-white w-[10%]">Marca</th>
          <th className="p-2 border border-indigo-900 text-white w-[10%]">Categoría</th>
          <th className="p-2 border border-indigo-900 text-white w-[10%]">Precio</th>
          <th className="p-2 border border-indigo-900 text-white w-[15%]">Fecha Creación</th>
          <th className="p-2 border border-indigo-900 text-white w-[10%] text-center">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((producto) => (
          <tr key={producto.id}>
            <td className="p-2 border font-semibold border-indigo-900 text-right">{producto.id}</td>
            <td className="p-2 border border-indigo-900">{producto.nombre}</td>
            <td className="p-2 border border-indigo-900">{producto.descripcion}</td>
            <td className="p-2 border border-indigo-900">{producto.marca?.nombre}</td> 
            <td className="p-2 border border-indigo-900">{producto.categoria?.nombre}</td>
            <td className="p-2 border border-indigo-900 text-right">S/.{producto.precio}</td>
            <td className="p-2 border border-indigo-900 text-center">{new Date(producto.createdAt).toLocaleDateString()}</td>
            <td className="p-2 border border-indigo-900 flex justify-center gap-2">
              <button
                className="p-1 bg-blue-500 hover:bg-green-600 text-white rounded"
                onClick={() => handleEdit(producto.id)}
              >
                <Pencil size={20} />
              </button>
              <button
                className="p-1 bg-red-500 hover:bg-red-600 text-white rounded"
                onClick={() => handleDelete(producto.id)}
              >
                <Trash2 size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProducts;