/* eslint-disable react/prop-types */


import { Navigate, Route, Routes } from "react-router-dom"
import { TableView } from "../components/TableView"
import { CartView } from "../components/CartView"


export const CartRoutes = ({ cartItems, handlerAddProduct, handlerDeleteProduct }) => {
  
  return (
    <>
     <Routes>
          <Route
            path="catalog"
            element={<CartView handler={handlerAddProduct} />}
          />
          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? (
                <div className="alert alert-danger">
                  {" "}
                  no hay productos en el carro de compras!
                </div>
              ) : (
                <div>
                  <TableView
                    items={cartItems}
                    handlerDeleteProduct={handlerDeleteProduct}
                  />
                </div>
              )
            }
          />
          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
    
    </>
  )
}
