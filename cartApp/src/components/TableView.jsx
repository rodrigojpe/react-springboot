import { useNavigate } from 'react-router-dom';
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";





export const TableView = ({items,handlerDeleteProduct}) => {
    const   [total, setTotal] = useState(0);

     useEffect(() => {

        setTotal(
            calculateTotal(items),
        )
   
    }, [items] )
    

   

    const onDeleteProduct = (id) => {
        handlerDeleteProduct(id)

    }


    const navigate = useNavigate();

    const onVolver = () => {
      navigate('/')
    }
  return (
    <>
    <h3>Carro de Compras</h3>
      <div className="my-4 w-50 container">
      <table className="table table-hover table-striped table-responsive">
        <thead className="">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
            {items.map(item => (
          <tr key={item.product.id}>
          <td>{item.product.name}</td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{item.quantity * item.product.price }</td>
          <td><button className="btn btn btn-danger"
             onClick={ () => onDeleteProduct(item.product.id)  }
          >Eliminar</button></td>
          </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold"> Total</td>
            <td colSpan="2" className="text-end fw-bold">$ {total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    
    <button className='btn btn-info' onClick={ onVolver }>Volver a compar</button>
    
    
    
    </>
  )
}
