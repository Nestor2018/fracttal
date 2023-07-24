import { useState } from "react";
import { useDispatch } from "react-redux";

import "./login.scss";
import { createAccount, login } from "../../store/user";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { sha256 } from "../../utils/auth";
import logo from "../../assets/images/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const hashedPassword = sha256(password);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const changeLogin = () => {
    setIsLogin(!isLogin);
  };

  const doSignIn = () => {
    dispatch(
      login({
        credentials: {
          email,
          hashedPassword
        }
      })
    );
  };

  const creanteAccount = () => {
    dispatch(
      createAccount({
        credentials: {
          email,
          hashedPassword
        }
      })
    );
  };

  return (
    <div className="login-container">
      <img src={logo} />
      <form className="login-container__form">
        <p className="login-title__page">
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </p>
        <div className="login-container__inputs">
          <Input
            placeholder="Usuario"
            type="text"
            value={email}
            setValue={handleEmailChange}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            value={password}
            setValue={handlePasswordChange}
          />
        </div>
        <p className="login-link" onClick={changeLogin}>
          {isLogin ? "Crear cuenta" : "Iniciar sesión"}
        </p>
        <Button
          click={isLogin ? () => doSignIn() : () => creanteAccount()}
          text={isLogin ? "Iniciar sesión" : "Crear cuenta"}
        />
      </form>
    </div>
  );
};

export default Login;
