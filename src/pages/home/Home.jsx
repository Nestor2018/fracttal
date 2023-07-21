import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Spinner from "../../components/spinner/Spinner";
import { getEmployees } from "../../store/employees";
import { logOut, signUp } from "../../store/user";

const Home = () => {
  const dispatch = useDispatch();
  const employees2 = useSelector(state => state.employees.employees);
  const employees = employees2.slice(1);

  const dologOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <div>
      <Spinner />
      {employees.map((employee, index) => (
        <div key={index}>
          <p>{employee.nombre}</p>
          <p>{employee.descripcion}</p>
        </div>
      ))}
      <button onClick={() => dologOut()}>cerrar sesion</button>
    </div>
  );
};

export default Home;
