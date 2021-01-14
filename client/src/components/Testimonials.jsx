import React from "react";
import styled from "styled-components";

import ingredients from "../assets/backgrounds/ingredients.jpg";
import TestimonialCard from "./TestimonialCard";

const BackgroundArea = styled.div`
  height: 450px;
  background-image: url(${ingredients});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 1200px) {
    height: fit-content;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  position: relative;
  z-index: 5;
  text-align: center;

  h3 {
    font-size: 3rem;
    color: white;
    margin-bottom: 25px;
  }

  .testimonios {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 1200px) {
    margin: 35px auto;
  }

  @media only screen and (max-width: 1070px) {
    .testimonios {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Testimonials = () => {
  return (
    <BackgroundArea>
      <div className="overlay" />
      <Container>
        <h3>Testimonios de clientes</h3>
        <div className="testimonios">
          <TestimonialCard stars={5} />
          <TestimonialCard stars={4.5} />
          <TestimonialCard stars={3.5} />
        </div>
      </Container>
    </BackgroundArea>
  );
};

export default Testimonials;
