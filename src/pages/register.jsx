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
// import { authApi } from "../api/auth";

//styles
import "../style/login.css";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    navigate("/dashboard");
  };

  return (
    <div className="container-login">
      <div className="container-login-img">
        <img className="login-img" src={loginPicture}></img>
      </div>

      <div className="container-login-form">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-header">
            {/* <img className="login-form-logo" src={muvigLogo} alt="Logo MUVIG" /> */}
            <h1>Registro</h1>
          </div>

          <FloatLabel>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="username">Usuario</label>
          </FloatLabel>

          <FloatLabel>
            <InputText
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">Correo</label>
          </FloatLabel>

          <FloatLabel>
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              tabIndex={1}
            />

            <label htmlFor="username">Contraseña</label>
          </FloatLabel>

          <p className="login-form-password">
            <a href="">¿Olvidaste tu contraseña?</a>
          </p>
          <p className="login-form-password">
            <a href="/">Login</a>
          </p>

          <Button label="Registro" type="submit" />
        </form>
      </div>
    </div>
  );
};
