export const ClientView = ({client}) => {

    const { address, lastName, name } = client;
    console.log('client', client )
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active">Nombre: {name } { lastName }</li>
        <li className="list-group-item">Pais: {address.country}</li>
        <li className="list-group-item">city: {address.city}</li>
        <li className="list-group-item">street: {address.street}</li>
      </ul>
    </>
  );
};
