import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  position: relative;
  background-color: crimson;
  border-radius: 25px;
  height: 230px;
  width: 350px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: auto;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }

  .start {
    position: absolute;
    top: 50px;
    left: 15px;
    z-index: 1;
    font-size: 2rem;
    i {
      color: #640c1e;
    }
  }

  .end {
    position: absolute;
    bottom: 5px;
    right: 15px;
    z-index: 1;
    font-size: 2rem;
    i {
      color: #640c1e;
    }
  }

  .stars {
    color: #ffd900;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  p {
    z-index: 5;
  }

  h3 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 10px;
  }
`;

const generateStars = (numOfStars) => {
  let current = numOfStars;

  const arr = [];

  for (let i = 0; i < 5; i++) {
    if (current >= 1) {
      arr.push(<i className="fas fa-star" key={i + Date.now()} />);
      current--;
    } else if (current > 0 && current < 1) {
      arr.push(<i className="far fa-star" key={i + Date.now()} />);
      current -= current;
    } else {
      arr.push(<i className="fas fa-star-half-alt" key={i + Date.now()} />);
    }
  }

  return arr;
};

const TestimonialCard = ({ stars }) => {
  return (
    <CardBody>
      <Content>
        <span className="start">
          <i className="fas fa-quote-left"></i>
        </span>
        <img
          src="https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg"
          alt="avatar"
        />
        <h3>John Doe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis
          in, amet quos maxime perspiciatis pariatur dolorem iure totam? Eum.
        </p>
        <span className="end">
          <i className="fas fa-quote-right"></i>
        </span>
        <div className="stars">{generateStars(stars)}</div>
      </Content>
    </CardBody>
  );
};

export default TestimonialCard;
