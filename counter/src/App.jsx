import { useState } from "react";

export const App = ({ initialState }) => {

  const [counter, setCounter] = useState(initialState); // useState es una funcion que nos permite crear un estado en nuestra aplicacion  useState
  const counterIncrement = () => {
    setCounter( c => c + 1); // setCounter es una funcion que nos permite actualizar el estado de nuestra aplicacion (counter + 1)
  }

  return (
    <>
    <h2> El valor del Contador es : {counter} </h2>
    <button
    onClick={ counterIncrement }
    >incrementar + 1</button>
    </>
  )
}
