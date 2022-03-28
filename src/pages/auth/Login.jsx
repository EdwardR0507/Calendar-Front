import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";
const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "edward@ramos.com",
    lPassword: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <form onSubmit={handleLogin} className="col-md-6 login-form">
      <h3>Login</h3>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control "
          placeholder="Email"
          name="lEmail"
          value={lEmail}
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="lPassword"
          value={lPassword}
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input type="submit" className="btnSubmit" value="Login" />
      </div>
    </form>
  );
};
export default Login;
