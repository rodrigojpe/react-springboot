/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = ({  userSelected,   setvisibleForm }) => {


  const { initialUserForm, handlerAddUser } = useContext(UserContext);

  // console.log('initialUserForm',initialUserForm)
  const [userForm, setUserForm] = useState(initialUserForm || userSelected);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });

    // console.log("change", username);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      return;
    }

  
    if(!email.includes('@')){
      alert('Email invalido')
      return;
    }

    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const closeForm = ()=> {
    setvisibleForm(false)
    setUserForm(initialUserForm);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {id > 0 || (
        <input
          type="password"
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}
      <input
        type="email"
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-primary">
        {id === 0 ? "Crear" : "Editar"}
      </button>
        {
          (setvisibleForm ?
          <button
          onClick={  closeForm }
          className="btn btn-primary mx-2">Cerrar</button>
          : '') 
        }

    </form>
  );
};
