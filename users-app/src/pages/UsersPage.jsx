/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { UserForm } from "../components/UserForm";
import { UserList } from "../components/UserList";
import { UserContext } from "../context/UserContext";





export const UsersPage = () => {

const {  
  users,  
  userSelected,   
  visibleForm,   
  setvisibleForm , 
  getUsers} = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, [])
  

  return (
    <>
    <div className="container my-4">
      <h2>User Apps</h2>
      <div className="row">
        <div className="col">
          {
            !visibleForm ||  <UserForm
            userSelected={ userSelected }
            setvisibleForm={ setvisibleForm }
           />
          }
        </div>
        <div className="col">
          <button
          onClick={ ()=> setvisibleForm(true)}
          className="btn btn-primary my-2">
            Nuevo Usuario
          </button>
          {
            users.length === 0
            ? <div className='alert alert-warning'>No hay usuarios en el sistema! </div>
            :   <UserList  /> }
        </div>
      </div>
    </div>
    </>
  );
};
