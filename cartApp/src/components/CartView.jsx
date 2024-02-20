/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CartItem } from "./CartItem";

export const CartView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const findAll = async () => {
    const prods = await getProducts();
    setProducts(prods);
  }

  useEffect(() => {
    // setProducts();
    findAll();
  }, []);
  return (
    <>
    {
      isLoading && <div className="Alert alert-info">Cargando...</div>
    }
      <div className="row">
        { products.map((prod) => (
          <div className="col-4 my-4" key={prod.id}>
            <CartItem
              handler={ handler }
              name={prod.name}
              price={prod.price}
              description={prod.description}
              id={prod.id}
              image={prod.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};
