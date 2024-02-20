/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

/* const {
    initialUserForm,
  } = useUsers(); */

export const RegisterPage = () => {
  const { users = [], initialUserForm } = useContext(UserContext);

  const [userSelected, setUserSelected] = useState(initialUserForm);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user =
        users.find((user) => user.id === Number(id)) || initialUserForm;
      setUserSelected(user);
    }
  }, [id]);

  return (
    <div className="container my-4">
      <h4> {userSelected.id ? "Editar" : "Registrar"} usuario</h4>
      <div className="row">
        <div className="col">
          <UserForm userSelected={userSelected}/>
        </div>
      </div>
    </div>
  );
};
