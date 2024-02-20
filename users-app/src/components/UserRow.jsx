/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ id,username,email }) => {

  const { handlerRemoveUser, handlerUpdateUser } = useContext(UserContext); 

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => handlerUpdateUser({
              id,
              username,
              email,
            })}
          >
            Update
          </button>
        </td>
        <td>
          <NavLink className={'btn btn-secondary btn-sm'} to={'edit/'+ id } > Update Ro</NavLink>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handlerRemoveUser(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
