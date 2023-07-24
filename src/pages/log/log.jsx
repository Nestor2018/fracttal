import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLogs } from "../../store/log";
import "./log.scss";

const Log = () => {
  const dispatch = useDispatch();

  const logs = useSelector(state => state.log.logs);

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  return (
    <div className="log-container">
      <p className="log-title">Log transaccional</p>
      {logs && logs.map((log, index) => (
        <div key={index} className="log-item">
          <p>
            <strong>Ip</strong>: {log.ip}
          </p>
          <p>
            <strong>Acción</strong>: {log.accion}
          </p>
          <p>
            <strong>Hora</strong>: {log.hora}
          </p>
          <p>
            <strong>Usuario que realizo la acción</strong>: {log.user}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Log;
