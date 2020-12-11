import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 15% 15% 15%;
  height: 120px;
  margin-bottom: 5px;
  align-items: center;
  text-align: center;
  background-color: white;

  .description {
    display: flex;
    align-items: center;

    img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      margin-right: 25px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
    grid-template-columns: auto 19% 19% 19%;

    .description {
      img {
        width: 50%;
        margin-right: 5px;
      }
    }
  }
`;

const CartItem = ({ item }) => {
  return (
    <Item>
      <div className="description">
        <img src={item.picture} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <div className="buttons">
        <button>-</button>
        <p>{item.qty}</p>
        <button>+</button>
      </div>
      <p>$ {item.sale_price ? item.sale_price : item.regular_price}</p>
      <p>
        ${" "}
        {item.sale_price
          ? item.sale_price * item.qty
          : item.regular_price * item.qty}
      </p>
    </Item>
  );
};

export default CartItem;
