import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="/auth/login"></Navigate>} />
    </Routes>
  );
};

export default AuthRouter;
