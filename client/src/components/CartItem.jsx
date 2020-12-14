import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../redux/cart/cartActions";

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
    margin-left: 10px;

    img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      margin-right: 25px;
    }
  }

  .buttons {
    border: 1px solid #f2f2f2;
    width: 70%;
    margin: auto;
    display: flex;
    border-left: none;
    border-right: none;
    align-items: center;
    justify-content: space-between;

    button {
      border: 1px solid #f2f2f2;
      border-top: none;
      border-bottom: none;
      padding: 10px 12px;
      background-color: #fafafa;
      color: black;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
    grid-template-columns: auto 19% 19% 19%;

    .description {
      margin-left: none;
      flex-direction: column;
      align-items: center;
      img {
        height: 70px;
        width: 120px;
        margin-right: 5px;
      }
    }

    .buttons {
      width: 100%;
      button {
        padding: 5px;
      }
    }
  }
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <div className="description">
        <img src={item.picture} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <p>{item.qty}</p>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
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
