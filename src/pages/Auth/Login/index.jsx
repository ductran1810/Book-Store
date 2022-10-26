import { Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import { user } from "../../../store/userSlice";
import { userData } from "./userData";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const { login } = useAuth();

  const dispatch = useDispatch();

  localStorage.setItem("users", JSON.stringify(userData));

  const userList = JSON.parse(localStorage.getItem("users"));

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = userList.some(
      (user) => user.pass === password &&  user.mail === email
    );
    if (newUser) {
      login({ email, password });
      dispatch(user({ email }));
      Modal.success({ 
        title: "Login success!",
      })
    } else {
      Modal.error({
        title: "Incorrect account or password! Please re-enter",
      });
    }
  };

  return (
    <div className="login-form">
      <form className="form-login" onSubmit={handleLogin}>
        <h2 className="login-title">Admin Login</h2>
        <div className="form-item form-login-item">
          <input
            required
            id="email"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="form-item form-login-item">
          <input
            required
            id="password"
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
