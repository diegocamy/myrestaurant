import React from "react";
import styled from "styled-components";

import { ReactComponent as SearchSVG } from "../assets/cards/search.svg";
import { ReactComponent as DeliverySVG } from "../assets/cards/delivery.svg";
import { ReactComponent as EatSVG } from "../assets/cards/eat.svg";
import friends from "../assets/backgrounds/friends.jpg";

const BackgroundArea = styled.div`
  background-image: url(${friends});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 650px;
  position: relative;
  z-index: 1;

  .gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 20%,
      rgb(220, 20, 60) 60%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 20%,
      rgb(220, 20, 60) 60%
    );
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 20%,
      rgb(220, 20, 60) 60%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#ff0000",GradientType=1);

    @media only screen and (max-width: 1100px) {
      background: -moz-linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 80%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 80%
      );
      background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 80%
      );
    }

    @media only screen and (max-width: 800px){
      background: -moz-linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 60%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 60%
      );
      background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 20%,
        rgb(220, 20, 60) 60%
      );
    }
    }
  }

  @media only screen and (max-width: 800px) {
    height: fit-content;
    background-size: auto;
    background-position-y: 0;
  }
`;

const Container = styled.div`
  margin: auto;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 4;
  width: 50%;

  .cardColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1100px) {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 55px;
    .cardColumn {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  z-index: 4;
  font-size: 1.7rem;
  width: 50%;

  hr {
    width: 350px;
    border: 2px solid white;
    margin-bottom: 15px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 10px;
    span {
      color: #ffd900;
    }
  }

  h4 {
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
  }

  button {
    padding: 10px 60px;
    border-radius: 9px;
    border: none;
    color: black;
    background-color: #ffd900;
    font-weight: bold;
    font-size: 1.3rem;
    width: fit-content;
    margin: 15px 5px;
    transition: all 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: red;
    }
  }

  @media only screen and (max-width: 1100px) {
    text-align: center;
    width: 70%;
    hr {
      margin: 10px auto;
    }

    button {
      margin: 25px auto;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 55px;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 25px;
  margin: 20px 10px;
  position: relative;
  text-align: center;

  .number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 4rem;
    font-weight: bold;
    color: #ffd900;
    margin-top: -30px;
    text-shadow: 4px 2px 5px #757575;
  }

  .svg {
    width: 100%;
    height: 45%;
    margin: 3px auto;
  }

  h4 {
    margin: 10px auto;
  }

  p {
    padding: 0 10px;
    line-height: 1rem;
    color: gray;
  }
`;

const OrderNow = () => {
  return (
    <BackgroundArea>
      <div className="gradient"></div>
      <Container>
        <CardsContainer>
          <div className="cardColumn">
            <Card className="shadow">
              <div className="number">1</div>
              <SearchSVG className="svg" />
              <h4>Pedí Facilmente</h4>
              <p>
                Buscá lo que quieras comer en nuestro menú, agregalo al carrito
                y pedilo!
              </p>
            </Card>
            <Card className="shadow">
              <div className="number">2</div>
              <DeliverySVG className="svg" />
              <h4>Delivery Rápido</h4>
              <p>Recibí tu pedido en tiempo récord y sin moverte de tu casa.</p>
            </Card>
          </div>
          <div className="cardColumn">
            <Card className="shadow">
              <div className="number">3</div>
              <EatSVG className="svg" />
              <h4>Disfrutá la Comida</h4>
              <p>
                Disfrutá tu pedido solo o acompañado. En tu casa, trabajo o
                donde sea.
              </p>
            </Card>
          </div>
        </CardsContainer>
        <TextContainer>
          <hr />
          <h2>
            Pedidos en <span>3</span> pasos
          </h2>
          <h4>Lo pedís, te lo llevamos y lo disfrutás. </h4>
          <p>
            Buscá lo que quieras comer de manera fácil, armá tu pedido a tu
            manera, cuando quieras y sin demoras.
          </p>
          <button>Registrarse</button>
        </TextContainer>
      </Container>
    </BackgroundArea>
  );
};

export default OrderNow;
