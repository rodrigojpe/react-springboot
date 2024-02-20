/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const initialLoginform = {
  username: "",
  password: "",
};

export const LoginPage = () => {

  const {handlerLogin} = useContext(AuthContext); 

  const [loginForm, setLoginForm] = useState(initialLoginform);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    console.log(name, value);

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
    if (!username || !password) {
      return;
    }

    handlerLogin({username, password})

    setLoginForm(initialLoginform);
  };

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Page</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
              />

              <input
                className="form-control my-3 w-75"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={onInputChange}
              />
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
