import React from "react";
import styled from "styled-components";

import friends from "../assets/backgrounds/friends.jpg";

const BackGround = styled.div`
  background: url(${friends});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 855px;
    width: 100%;
    z-index: 2;
  }
`;

const ColoredBox = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: white;
  z-index: 3;

  .top {
    background-color: crimson;
    height: 40%;

    h2 {
      text-align: center;
      color: white;
      font-size: 2rem;
      margin-top: 15px;
      span {
        font-weight: normal;
        font-size: 1.3rem;
      }
    }
  }
  .bottom {
    background-color: #fafafa;
    height: 60%;
  }
`;

const LoginBox = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px auto;
  }
`;

const Login = () => {
  return (
    <BackGround>
      <div className="overlay"></div>
      <ColoredBox>
        <div className="top">
          <h2>
            <span>my</span>restaurant
          </h2>
        </div>
        <div className="bottom"></div>
        <LoginBox className="shadow">
          <h2>Iniciar Sesión</h2>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="text" id="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button>Ingresar</button>
        </LoginBox>
      </ColoredBox>
    </BackGround>
  );
};

export default Login;
