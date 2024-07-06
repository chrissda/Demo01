//Componente productCardN
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const ProductCardN = ({ product }) => {
  // usando contexto para guardar datos al carrito
  // const { addProductToCart } = useContext(CartContext);
  // props a renderizar 
  const { id, nombre, foto, categoria, descripcion, precio } = product;

  return(
      // Contenido del Card/imagen/texto
      <div>
        {/* Card */}
        <div className="bg-indigo-100 p-2 rounded-md shadow-xl">
          <div className="bg-indigo-50 rounded-md overflow-hidden shadow-xl max-w-md mx-auto relative">
            {/* imagen */}
            <img
              className="w-full h-64 object-cover"
              src={foto}
              alt="Image.jpg"
            />
            <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 text-sm font-semibold rounded-lg">
              {categoria} 
            </span>
          </div>
          {/* Texto Card */}
          <div className="p-4"> 
            <Link className="textOverflow text-md font-semibold mb-2" to={`/product/${id}`}>{nombre}</Link>
            {/* <NavLink className="text-md font-semibold mb-2 truncate" to={`/product/${id}`}>{nombre}</NavLink>   */}
            <p className="text-sm text-gray-800 mb-2 truncate">{descripcion}</p> 
            <span className="text-md text-indigo-800 font-semibold">S/.{precio}</span> 
            
          </div>
          <div className="flex justify-center text-white text-center">
              {/* botones agregar y vista previa producto */}
            <button 
              className="px-3 py-1 bg-gray-700 hover:bg-gray-500 rounded-l-lg font-semibold"
              // onClick={() => {addProductToCart(product)}}
            >
              Add <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Link 
              className="px-2 py-1 bg-indigo-700 hover:bg-indigo-600 rounded-r-lg font-semibold"
              to={`/product/${id}`}
            >
              View <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ProductCardN;