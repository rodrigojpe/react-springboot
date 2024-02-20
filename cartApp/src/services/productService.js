
import { products } from "../data/productos";

export const getProducts = async () => {

    const response = await fetch('http://localhost:8090/products')
    const products = await response.json(); 
    return products;
}

export const calculateTotal = (items) => {
    return   items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
}