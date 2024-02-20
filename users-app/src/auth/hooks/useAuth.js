import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { useNavigate } from 'react-router-dom';


const initialLogin = JSON.parse( sessionStorage.getItem("login") ) || {
    isAuth: false,
    user: undefined,
  };
export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const navigate = useNavigate();

    const handlerLogin = ({ username, password }) => {
        if (username === "admin" && password === "admin") {
          const user = { username: "admin" };
          dispatch({
            type: "login",
            payload: user,
          });
          localStorage.setItem("login", JSON.stringify({
            isAuth: true,
            user
          }));

          navigate('/users');
        } else {
          alert("Login Failed");
          return;
        }
      };


      const handlerLogout = () => {
        dispatch({
          type: "logout",
        });
        localStorage.removeItem("login");
      }

    return {
        handlerLogin,
        handlerLogout,
        login
    }

  
}
