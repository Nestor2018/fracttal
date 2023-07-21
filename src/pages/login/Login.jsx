import { useDispatch } from "react-redux";

import { signUp } from "../../store/user";
import { sha256 } from "../../utils/auth";

const Login = () => {
  const dispatch = useDispatch();
  const hashedPassword = sha256("1234abc");
  const doSignIn = (email, password) => {
    dispatch(
      signUp({
        credentials: {
          email,
          password
        }
      })
    );
  };
  return (
    <div>
      <p>sign in</p>
      <button onClick={() => doSignIn("email", "1234abc")}>Ingresar</button>
    </div>
  );
};

export default Login;
