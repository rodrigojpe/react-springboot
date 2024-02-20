import { useEffect, useState } from "react";

export const FormItemsViews = ({ handler }) => {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: 0,
    quantity: 0,
  });
 

  const { product, price, quantity } = formItemsState;

  
  useEffect(() => {}, [price]);
  
  useEffect(() => {}, [formItemsState]);

/*   const [counter, setCounter] = useState(4);

  const [items, setItems] = useState([]); */

 

  const onInvoiceInputChange = ({ target: { name, value } }) => {
    // setProdusetIctValue(event.target.value);
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoceItemsSubmit = (event) => {
    event.preventDefault();
    if (price.trim().lenght <= 1) return;
    if (quantity.trim().lenght <= 1) return;
    if (product.trim().lenght <= 1) return;

   /*  setItems([
      ...items,
      {
        id: counter,
        product: product,
        price: +price,
        quantity: parseInt(quantity, 10),
      },
    ]); */
    handler(formItemsState)
    setFormItemsState({
      product: "",
      price: 0,
      quantity: 0,
    });
    // setCounter(counter + 1);
  };

  return (
    <>
      <form onSubmit={onInvoceItemsSubmit}>
        <input
          type="text"
          placeholder="product"
          value={product}
          name="product"
          onChange={onInvoiceInputChange}
          className="form-control m-3"
        />

        <input
          type="text"
          placeholder="price"
          value={price}
          name="price"
          onChange={onInvoiceInputChange}
          className="form-control m-3"
        />

        <input
          type="text"
          value={quantity}
          placeholder="quantity"
          name="quantity"
          onChange={onInvoiceInputChange}
          className="form-control m-3"
        />

        <button type="submit" className="btn btn-primary">
          Crear Item
        </button>
      </form>
    </>
  );
};
