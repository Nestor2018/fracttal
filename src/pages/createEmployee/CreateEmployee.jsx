import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { createEmployee } from "../../store/employees";
import { createLog } from "../../store/log";
import useToast from "../../hooks/useToast";
import { hour } from "../../utils/auth";
import "./createEmployee.scss";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const employees = useSelector(state => state.employees.employees);
  const user = useSelector(state => state.user.user);
  const ip = useSelector(state => state.log.ip);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const generateId = () => {
    let id;
    if (employees.length > 0) {
      let lastEmployee = employees[employees.length - 1];
      id = lastEmployee.id + 1;
    } else {
      id = 1;
    }
    return id;
  };

  const handlecreateEmployee = () => {
    if (!name || !description) {
      useToast("Todos los campos son obligatorios", "#e41e25");
    } else {
      dispatch(
        createEmployee({
          credentials: {
            id: generateId(),
            name,
            description
          }
        })
      );

      dispatch(
        createLog({
          credentials: {
            user: user.email,
            hour: hour(),
            action: "create",
            ip
          }
        })
      );
    }
  };

  return (
    <div className="createAccount">
      <p className="createAccount-title">Crear empleado</p>
      <form className="createAccount-form">
        <Input
          placeholder="Nombre"
          type="text"
          value={name}
          setValue={handleNameChange}
        />
        <Input
          placeholder="Descripción"
          type="text"
          value={description}
          setValue={handleDescriptionChange}
        />
      </form>
      <Button click={() => handlecreateEmployee()} text="Crear empleado" />
    </div>
  );
};

export default CreateEmployee;
