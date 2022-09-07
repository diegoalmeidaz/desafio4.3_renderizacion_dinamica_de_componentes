import TaskList from "../components/TaskList";
import Search from "../components/Search";
import TaskForm from "../components/TaskForm";
import { users as data } from "../assets/data/users";
import { useState, useEffect } from "react";

function Content() {
  const [users, setUsers] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    setUsers(data);
  }, []);

  function newUser(dataName, dataLastName, dataMail) {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: dataName.trim(),
        lastName: dataLastName.trim(),
        mail: dataMail.trim(),
      },
    ]);
    setTerminoBusqueda("");
  }

  return (
    <>
      <TaskForm newUser={newUser}></TaskForm>
      <Search setTerminoBusqueda={setTerminoBusqueda}></Search>
      <TaskList users={users} terminoBusqueda={terminoBusqueda}></TaskList>
      
    </>
  );
}

export default Content;
