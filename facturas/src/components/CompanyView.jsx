
export const CompanyView = ({company}) => {


    console.log('company ', company)

    const {name ,fiscalNumber } = company;

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active">Nombre: {name}</li>
        <li className="list-group-item">
          fiscalNumber: {fiscalNumber}
        </li>
      </ul>
    </>
  );
};
