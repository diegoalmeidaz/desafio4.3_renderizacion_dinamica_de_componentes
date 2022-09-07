import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskForm({ newUser }) {
  const [dataName, setDataName] = useState("");
  const [dataLastName, setDataLastName] = useState("");
  const [dataMail, setDataMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newUser(dataName, dataLastName, dataMail);
    setDataName("");
    setDataLastName("");
    setDataMail("");
  };

  return (
    
    <div className="">
    <h1 className=" ml-7 mt-3">Ingresa a un nuevo eCorper</h1>
    <form className="p-10" onSubmit={handleSubmit}>
      <Form.Control
        size="text"
        value={dataName}
        className="mt-1"
        placeholder="Ingresa Nombre"
        onChange={(e) => setDataName(e.target.value)}
      />
      <Form.Control
        size="text"
        value={dataLastName}
        className="mt-4"
        placeholder="Ingresa Apellido"
        onChange={(e) => setDataLastName(e.target.value)}
      />
      <Form.Control
        size="text"
        id="email"
        type="email"
        value={dataMail}
        className="mt-4"
        placeholder="Ingresa Correo"
        onChange={(e) => setDataMail(e.target.value)}
      />
      <Button
        variant="secondary"
        type="submit"
        className="ml-2 mt-4 justify-center "
      >
        Guardar
      </Button>
    </form>
    </div>
  );
}

export default TaskForm;
