import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import friends from "../assets/backgrounds/friends.jpg";

const BackGround = styled.div`
  background: url(${friends});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 610px;
  background-color: white;
  z-index: 3;

  .top {
    background-color: crimson;
    height: 31%;

    h2 {
      text-align: center;
      color: white;
      font-size: 3rem;
      margin-top: 30px;
      span {
        font-weight: normal;
        font-size: 2.1rem;
      }
    }

    h4 {
      text-align: center;
      color: white;
      font-size: 1.5rem;
    }
  }
  .bottom {
    background-color: #fafafa;
    height: 69%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    a {
      text-decoration: none;
      color: crimson;
      margin: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const RegisterBox = styled.div`
  position: absolute;
  top: 23%;
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

  .google {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4285f4;
    color: white;
    padding: 10px;
    width: 85%;
    border: none;
    border-radius: 3px;
    font-size: 1.2rem;
    margin: 10px auto;
    transition: all 300ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #2f6bcc;
    }

    .left {
      width: 12%;
      font-size: 1.2rem;
    }
  }

  .input-div {
    text-align: center;
    position: relative;

    i {
      position: absolute;
      top: 50%;
      left: 11%;
      color: crimson;
      font-size: 1.2rem;
      transform: translateY(-50%);
    }

    input {
      border: 2px solid crimson;
      border-radius: 3px;
      margin: 10px auto;
      padding: 10px;
      font-weight: 450;
      font-size: 1.2rem;
      padding-left: 35px;
      width: 85%;
    }
  }

  .divider {
    margin: 15px 0;
    text-align: center;
    position: relative;
    height: 15px;
    display: flex;
    align-items: center;

    hr {
      position: relative;
      width: 80%;
      border: 0.5px solid lightgray;
      margin: auto;
    }

    p {
      background-color: white;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 10%;
    }
  }

  form {
    text-align: center;
    button {
      color: white;
      background-color: crimson;
      border: none;
      border-radius: 3px;
      padding: 10px 20px;
      font-size: 1.2rem;
      margin: 15px auto;
      text-align: center;
      transition: all 300ms ease-in-out;

      &:hover {
        cursor: pointer;
        background-color: #ee1742;
      }
    }
  }
`;

const Register = () => {
  return (
    <BackGround>
      <div className="overlay"></div>
      <ColoredBox>
        <div className="top">
          <h2>
            <span>my</span>restaurant
          </h2>
          <h4>Registrarse</h4>
        </div>
        <div className="bottom">
          <Link to="/login">Ya tienes una cuenta?</Link>
        </div>
        <RegisterBox className="shadow">
          <div className="google">
            <div className="left">
              <i className="fab fa-google"></i>
            </div>
            <p>Usando Google</p>
          </div>
          <div className="divider">
            <hr />
            <p>o</p>
          </div>
          <form>
            <div className="input-div">
              <i className="fas fa-envelope"></i>
              <input type="text" id="email" placeholder="Correo Electrónico" />
            </div>
            <div className="input-div">
              <i className="fas fa-unlock-alt"></i>
              <input type="password" id="password" placeholder="Contraseña" />
            </div>
            <div className="input-div">
              <i className="fas fa-unlock-alt"></i>
              <input
                type="password"
                id="password"
                placeholder="Repetir Contraseña"
              />
            </div>
            <button>
              Registrarse <i className="fas fa-sign-in-alt"></i>
            </button>
          </form>
        </RegisterBox>
      </ColoredBox>
    </BackGround>
  );
};

export default Register;
