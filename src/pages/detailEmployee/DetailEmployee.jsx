import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./detailEmployee.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { editEmployee } from "../../store/employees";
import { createLog } from "../../store/log";
import { hour } from "../../utils/auth";
import useToast from "../../hooks/useToast";

const DetailEmployee = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const employee = location.state;
  const user = useSelector(state => state.user.user);
  const ip = useSelector(state => state.log.ip);
  const [name, setName] = useState(employee.nombre);
  const [description, setDescription] = useState(employee.descripcion);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleEditEmployee = () => {
    if (!name || !description) {
      useToast("Todos los campos son obligatorios", "#e41e25");
    } else {
      dispatch(
        editEmployee({
          credentials: {
            id: employee.id,
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
            action: "edit",
            ip
          }
        })
      );
    }
  };

  return (
    <div className="detailEmployee-container">
      <p className="detailEmployee-title">Detalles del empleado</p>
      <form className="detailEmployee-form">
        <Input
          placeholder="Contraseña"
          type="text"
          value={name}
          setValue={handleNameChange}
        />
        <Input
          placeholder="Contraseña"
          type="text"
          value={description}
          setValue={handleDescriptionChange}
        />
      </form>
      <Button click={() => handleEditEmployee()} text={"Editar"} />
    </div>
  );
};

export default DetailEmployee;
