/* eslint-disable react/prop-types */
import { useUsers } from '../hooks/useUsers';
import { UserContext } from './UserContext';




export const UserProvider = ({ children }) => {
    const {
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateUser,
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        setvisibleForm,
        getUsers,
      } = useUsers();

  return (
    <UserContext.Provider value={
        {
            handlerAddUser,
            handlerRemoveUser,
            handlerUpdateUser,
            users,
            userSelected,
            initialUserForm,
            visibleForm,
            setvisibleForm,
            getUsers
        }
    }>
        {children}
    </UserContext.Provider>
  )
}
