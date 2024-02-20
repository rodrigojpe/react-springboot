/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { useNavigate } from 'react-router-dom';
import { findAll, save, update } from "../services/userService";

const initialUser = []



export const useUsers = () => {
    const initialUserForm = {
        id: 0,
        username: '',
        password: '',
        email: ''
    }
    const [users, dispatch] = useReducer(usersReducer, initialUser);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const [visibleForm, setvisibleForm] = useState(false);
    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });    
    }

    const handlerAddUser = async(user) => {
        // console.log(user);
        let type;
        let response;
        if (user.id === 0) {

            type = 'addUser';
            messageUi('Creado')
            response = await save(user);
        } else {
            type = 'updateUser';
            messageUi('Actualizado')
            response = await update(user);
        }

        dispatch({
            type,
            payload: response.data
        })
        setvisibleForm(false);
        setUserSelected(initialUserForm);
        navigate('/users');
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'deleteUser',
            payload: id
        })
        messageUi('Eliminado')
        setvisibleForm(false);
    }

    const handlerUpdateUser = (user) => {

        console.log('user update ', user)

        setUserSelected({ ...user })
        setvisibleForm(true);
        // dispatch({
        //   type: 'updateUser',
        //   payload: id
        // })
    }

    const messageUi = (action) => {
        Swal.fire({
            title: `Usuario ${action}!`,
            text: `el usuario fue ${action}!`,
            icon: action === 'Creado' ? 'success' : 'question',
        });
    }

    

    return {
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateUser,
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        setvisibleForm,
        getUsers,
    }
}
