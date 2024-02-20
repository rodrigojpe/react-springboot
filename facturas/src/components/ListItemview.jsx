// eslint-disable-next-line react/prop-types
export const ListItemview = ({ item, handlerDeleteItem }) => {

    // eslint-disable-next-line react/prop-types
    const {id, product, quantity, price } = item;

  return (
    <>
      
      <tr key={id}>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td > <button className="btn btn-danger" onClick={()=> handlerDeleteItem(id)} >Eliminar </button> </td>
      </tr>
    </>
  );
};
