import { createContext, useState, useEffect } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";

const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const existsIndex = cart.findIndex((prod) => prod.id === product.id);
    if(existsIndex === -1){
      product.cantidad = 1;
      const newCart = [...cart, product];
      setCart(newCart);
    } else {
      const copyCart = [...cart];
      copyCart[existsIndex].cantidad++;
      setCart(copyCart);
    }
  }

  const quantityTotal = cart.reduce((acumulator, prod) => acumulator + prod.cantidad, 0);
    
  useEffect(() => {
    const dataStorage = getStorage('cart');
    console.log({ dataStorage });
    if(dataStorage){
      setCart(dataStorage);
    }
  }, [])

  useEffect(() => {
    if(cart.length > 0){
      saveStorage('cart', cart);
    }
  }, [cart]);
  
  return <CartContext.Provider value={{cart, addProductToCart, quantityTotal}}>
    {props.children}
  </CartContext.Provider>
}

export { 
  CartContext,
  CartContextProvider
}