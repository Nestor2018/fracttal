import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import { getEmployees, deleteEmployee } from "../../store/employees";
import { getIp } from "../../store/log";
import { logOut } from "../../store/user";
import { createLog } from "../../store/log";
import "./home.scss";
import Button from "../../components/button/Button";
import { hour } from "../../utils/auth";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector(state => state.employees.employees);
  const user = useSelector(state => state.user.user);
  const ip = useSelector(state => state.log.ip);

  const statusGetEmployees = useSelector(
    state => state.employees.statusGetEmployees
  );

  const statusDeleteEmployee = useSelector(
    state => state.employees.statusDeleteEmployee
  );

  const dologOut = () => {
    dispatch(logOut());
  };

  const goDetail = employee => {
    navigate("/detail", { state: employee });
  };

  const handleDeleteEmployee = id => {
    dispatch(
      deleteEmployee({
        credentials: {
          id
        }
      })
    );

    dispatch(
      createLog({
        credentials: {
          user: user.email,
          hour: hour(),
          action: "delete",
          ip
        }
      })
    );
  };

  const createEmployee = () => {
    navigate("/create");
  };

  const goLog = () => {
    navigate("/log");
  };

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getIp());
  }, []);

  useEffect(() => {
    if (statusDeleteEmployee == "success") {
      dispatch(getEmployees());
    }
  }, [statusDeleteEmployee]);

  return (
    <div className="home-container">
      {statusGetEmployees == "loading" && <Spinner />}
      {statusDeleteEmployee == "loading" && <Spinner />}
      <p className="home-title__page">Lista de empleados</p>
      <div className="home-container__employees">
        <div className="home-employee_header">
          <p className="home-employee__id header">id</p>
          <p className="home-employee__name header">Nombre</p>
          <p className="home-employee__description header">
            descripcion del cargo
          </p>
        </div>
        {employees &&
          employees.map((employee, index) => (
            <div key={index} className="home-employee">
              <p className="home-employee__id">
                <strong>id: </strong>
                {employee?.id}
              </p>
              <p className="home-employee__name">
                <strong>Nombre: </strong>
                {employee?.nombre}
              </p>
              <p className="home-employee__description">
                <strong>Descripción: </strong>
                {employee?.descripcion}
              </p>
              <Button text="Detalles" click={() => goDetail(employee)} />
              <Button
                text="Eliminar"
                click={() => handleDeleteEmployee(employee?.id)}
              />
            </div>
          ))}
      </div>
      <div className="home-container_buttons">
        <Button click={() => createEmployee()} text="Crear empleado" />
        <Button click={() => dologOut()} text="cerrar sesión" />
        <Button click={() => goLog()} text="Ver log" />
      </div>
    </div>
  );
};

export default Home;
