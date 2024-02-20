import { invoice } from "../data/invoice"


export const getInvoice = () => {


    const total = calcularTotal(invoice.items);
    return invoice;
}

export const calcularTotal = (items=[]) => {
    return items
    .map(item => item.price * item.quantity)
    .reduce((acumulador, currentValue) => acumulador + currentValue, 0) 
}