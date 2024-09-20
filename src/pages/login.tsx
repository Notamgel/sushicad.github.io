//libaries
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";

//assets
import loginPicture from "../assets/login-picture.png";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Imprimir valores del formulario
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container-login">
      <div className="container-login-img">
        <video
          className="login-img"
          autoPlay
          muted
          loop
          src={loginPicture}
        ></video>
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
