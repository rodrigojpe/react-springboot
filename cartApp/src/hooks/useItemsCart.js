import { useEffect, useReducer } from "react";
import { AddProductCart, RemoveProductCart, UpdateProductCart } from "../reducer/itemsActions";
import { itemsReducer } from "../reducer/itemsReducer";

let initialCartItem = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItem);

  useEffect(() => {

    sessionStorage.setItem('cart', JSON.stringify(cartItems))
  

}, [cartItems] )

  const handlerAddProduct = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);
    console.log('hasitem', hasItem)

    if (hasItem) {
      
      dispatch({
        type: UpdateProductCart,
        payload: product
      });
      return;
    }
    dispatch({
      type: AddProductCart,
      payload: product
    });
  };

  const handlerDeleteProduct = (id) => {
    dispatch({
      type: RemoveProductCart,
      payload: id 
    })
  };

    return {
        handlerAddProduct,
        handlerDeleteProduct,
        cartItems,

    }
}