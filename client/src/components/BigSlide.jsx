import React from "react";
import styled from "styled-components";

const Slide = styled.div`
  height: 600px;
  width: 100vw;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .overlay {
    position: absolute;
    background-color: rgb(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    text-align: center;
    z-index: 2;
    h2 {
      color: white;
      font-family: "Pacifico", cursive;
      font-size: 6rem;
      font-weight: lighter;
      text-shadow: 4px 3px 2px rgba(0, 0, 0, 0.5);
    }

    p {
      color: white;
      font-size: 2rem;
      margin-bottom: 10px;
      text-shadow: 4px 3px 2px rgba(0, 0, 0, 0.5);
    }

    button {
      background-color: ${(props) => props.buttonColor};
      color: ${(props) => props.buttonTextColor};
      border: none;
      padding: 15px 25px;
      border-radius: 30px;
      font-size: 1.2rem;
      transition: transform 100ms linear;
      text-transform: uppercase;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;

const BigSlide = ({
  backgroundImage,
  header,
  paragraph,
  color,
  buttonColor,
  buttonText,
  buttonTextColor,
}) => {
  return (
    <Slide
      backgroundImage={backgroundImage}
      color={color}
      buttonColor={buttonColor}
      buttonTextColor={buttonTextColor}
    >
      <img src={backgroundImage} alt="food" />
      <div className="overlay"></div>
      <div className="content">
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <button className="shadow">{buttonText}</button>
      </div>
    </Slide>
  );
};

export default BigSlide;
