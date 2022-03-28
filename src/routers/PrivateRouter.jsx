import { Navigate } from "react-router-dom";
const PrivateRouter = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
};
export default PrivateRouter;
