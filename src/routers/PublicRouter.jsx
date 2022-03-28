import { Navigate } from "react-router-dom";
const PublicRouter = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRouter;
