//libaries
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";

//assets
import loginPicture from "../assets/login-picture.png";

// API
import { authApi } from "../api/auth";

//styles
import "../style/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { token, user } = await authApi.login({ username, password });
      console.log(token);
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log("Credenciales incorrectas" + error);
    }
  };

  return (
    <div className="container-login">
      <div className="container-login-img">
        <img className="login-img" autoPlay muted loop src={loginPicture}></img>
      </div>

      <div className="container-login-form">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-header">
            {/* <img className="login-form-logo" src={muvigLogo} alt="Logo MUVIG" /> */}
            <h1>Iniciar Sesión</h1>
          </div>

          <FloatLabel>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </FloatLabel>

          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            feedback={false}
            tabIndex={1}
          />

          <p className="login-form-password">¿Olvidaste tu contraseña?</p>

          <Button label="Iniciar Sesión" type="submit" />
        </form>
      </div>
    </div>
  );
};
