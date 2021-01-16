import React from "react";
import styled from "styled-components";
import FoodCard from "../components/FoodCard";

import ProductCategories from "../components/ProductCategories";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const item = {
  id: "1",
  name: "Pizza Portuguesa",
  picture:
    "https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress",
  regular_price: "150",
  sale_price: "120",
};

const Menu = () => {
  return (
    <Container>
      <ProductCategories />
      <CardArea>
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
        <FoodCard item={item} />
      </CardArea>
    </Container>
  );
};

export default Menu;
