import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./register.css";
const Register = () => {
  const dispatch = useDispatch();
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "",
    rEmail: "",
    rPassword1: "",
    rPassword2: "",
  });
  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (rPassword1 !== rPassword2) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match",
      });
    }
    dispatch(startRegister(rName, rEmail, rPassword1));
  };
  return (
    <form onSubmit={handleRegister} className="col-md-6 register-form">
      <h3>Register</h3>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="rName"
          value={rName}
          onChange={handleRegisterInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="rEmail"
          value={rEmail}
          onChange={handleRegisterInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="rPassword1"
          value={rPassword1}
          onChange={handleRegisterInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="password"
          className="form-control"
          placeholder="Repeat password"
          name="rPassword2"
          value={rPassword2}
          onChange={handleRegisterInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <input type="submit" className="btnSubmit" value="Create Account" />
      </div>
    </form>
  );
};

export default Register;
