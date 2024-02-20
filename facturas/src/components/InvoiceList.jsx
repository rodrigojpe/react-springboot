/* eslint-disable react/prop-types */
import { ListItemview } from "./ListItemview";

// eslint-disable-next-line react/prop-types
export const InvoiceList = ({items, handlerDeleteItem }) => {
  return (
    <>
      <h4> Productos de la Factura</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>accion</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ListItemview handlerDeleteItem={ handlerDeleteItem } key={item.id} item={item} />
          ))}
        </tbody>
       {/*  <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>
              {items.reduce(
                (total, { quantity, price }) => total + quantity * price,
                0
              )}
            </td>
          </tr>
        </tfoot> */}
      </table>
    </>
  );
};
