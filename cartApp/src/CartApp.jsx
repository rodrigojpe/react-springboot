/* eslint-disable no-unused-vars */
import { NavBar } from "./components/NavBar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { handlerAddProduct, handlerDeleteProduct, cartItems } = useItemsCart();

  return (
    <>
      <NavBar />
      <div className="container">
        <h3>Cart App</h3>

       <CartRoutes 
        cartItems={cartItems} 
        handlerAddProduct={handlerAddProduct} 
        handlerDeleteProduct={handlerDeleteProduct}
         />
      </div>
    </>
  );
};
