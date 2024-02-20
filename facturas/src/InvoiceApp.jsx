import { calcularTotal, getInvoice } from "./helpers/getInvoice";
import { ClientView } from "./components/ClientView";
import { InvoiceView } from "./components/InvoiceView";
import { CompanyView } from "./components/companyView";
import { InvoiceList } from "./components/InvoiceList";
import { useEffect, useState } from "react";
import { TotalView } from "./components/TotalView";
import { FormItemsViews } from "./components/FormItemsViews";

const invoiceInitial = {
  id: 1,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      street: "",
      city: "",
      country: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};
export const InvoiceApp = () => {

  const [activeForm, setActiveForm] = useState(false); 

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

   useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);
 
  useEffect(() => {
  }, [counter]);

  useEffect(() => {
    setTotal(calcularTotal(items));
  }, [items]);

 /*  setFormItemsState({
    product: "",
    price: 0,
    quantity: 0,
  }); */


  



  const handrelAddItems = ({ product, price , quantity }) => {

    setItems([...items, {
      id:counter, 
      product,
      price,
      quantity 
    }]);

    setCounter(counter + 1); 
  }

  const handlerDeleteItem = (id)=> {
    setItems(items.filter(val=> val.id !== id ));
  }

  const onActiveForm =() => {
    setActiveForm(!activeForm);
  }
 

  return (
    <>
      <div className="container-xl">
        <div className="card">
          {/* <h1> Ejemplo Facturas </h1> */}

          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body my-1">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <h3> Datos del Cliente</h3>
                <ClientView client={client} />
              </div>
              <div className="col">
                <h3> Datos de la Empresa</h3>
                <CompanyView company={company} />
              </div>
            </div>
            <InvoiceList items={items} handlerDeleteItem={id => handlerDeleteItem(id) } />
            <TotalView total={total}/>
            <button className="btn btn-secondary"
            onClick={ onActiveForm } > { !activeForm ? 'Agregar Item' : 'Ocultar Form'}</button>
            { !activeForm  ||  <FormItemsViews handler={ (newItems)=> handrelAddItems(newItems)  }/>}
          </div>
        </div>
      </div>
    </>
  );
};
