import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import CreateEmployee from "../pages/createEmployee/CreateEmployee";
import DetailEmployee from "../pages/detailEmployee/DetailEmployee";
import Log from "../pages/log/log";

const AppRoutes = () => {
  const user = useSelector(state => state.user.user);
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/detail" element={<DetailEmployee />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
