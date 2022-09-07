import Form from "react-bootstrap/Form";

const Search = ({ setTerminoBusqueda }) => {
  const valorBusqueda = (busqueda) => {
    setTerminoBusqueda(busqueda);
  };

  return (
    <div className="p-10 mb-2">
        <h1>Busca un eCorper</h1>
    <Form.Control
      size="text"
      className="mt-4"
      placeholder="Ingresa Colaborador a Buscar"
      onChange={(e) => valorBusqueda(e.target.value)}
    
    />
    </div>
  );
};

export default Search;
