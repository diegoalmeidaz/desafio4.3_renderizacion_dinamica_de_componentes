import React from "react";

const TrakList = ({ users, terminoBusqueda }) => {
  return (
    <div className="ml-10 ">
      <h1>Listado de eCorpers</h1>
      <div className=" flex-row gap-5 grid-cols-4 p-10 ">
        {users
          .filter(
            (data) =>
              data.name.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
              data.lastName.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
              data.mail.toLowerCase().includes(terminoBusqueda.toLowerCase())
          )
          .map((data) => (
            <div key={data.id} className="bg-amber-100 grid-cols-4 justify-center text-center ">
              <h1>{data.name} {data.lastName} </h1>
              <p>{data.mail}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrakList;

/* const TrakList = ({users , terminoBusqueda}) => {
    return (
        <div>
            <h1>Listado Colabs</h1>
            <ul>
                {users.filter((data) => data.name.toLowerCase().includes(terminoBusqueda.toLowerCase())|| data.mail.toLowerCase().includes(terminoBusqueda.toLowerCase()))}
            </ul>
        </div>
    )
}

export default TrakList */
