import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  const isAuth = useSelector(state => state.user.user);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Login />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
