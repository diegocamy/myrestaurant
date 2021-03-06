import React from "react";
import styled from "styled-components";
import FoodCard from "../components/FoodCard";

const data = [
  {
    id: "1",
    name: "Pizza Portuguesa",
    picture:
      "https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress",
    regular_price: "150",
    sale_price: "120",
  },
  {
    id: "2",
    name: "Doble Cheddar",
    picture:
      "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress",
    regular_price: "210",
    sale_price: "175",
  },
  {
    id: "3",
    name: "Pizza 4 Quesos",
    picture:
      "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress",
    regular_price: "190",
    sale_price: "170",
  },
  {
    id: "4",
    name: "Combo Burger + Fritas",
    picture:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress",
    regular_price: "230",
    sale_price: "200",
  },
];

const FeaturedSection = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  padding: 100px 0;

  .title {
    margin: auto;
    font-size: 1.3rem;
    text-transform: uppercase;
    width: fit-content;
    padding-bottom: 5px;
    border-bottom: 4px solid red;
  }

  .card-container {
    margin: 20px auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    justify-items: center;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 270px);
    }
    @media only screen and (max-width: 540px) {
      grid-template-columns: 270px;
    }
  }
`;

const FeaturedFoods = () => {
  return (
    <FeaturedSection>
      <h3 className="title">Destacados del Mes</h3>
      <div className="card-container">
        {data.map((food) => {
          return <FoodCard key={food.id} item={food} />;
        })}
      </div>
    </FeaturedSection>
  );
};

export default FeaturedFoods;
