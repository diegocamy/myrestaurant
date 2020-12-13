import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

const CartPage = styled.div`
  background-color: #f1f1f1;
`;

const Container = styled.div`
  margin: auto;
  padding-top: 30px;
  max-width: 1100px;
  min-height: 100vh;

  @media only screen and (max-width: 700px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const CartItemsList = styled.div`
  .top {
    display: grid;
    height: 50px;
    align-items: center;
    grid-template-columns: auto 15% 15% 15%;
    margin-bottom: 5px;
    background-color: crimson;
    color: white;
    text-align: center;

    h4 {
      margin: auto;

      &:first-child {
        margin-left: 35px;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .top {
      grid-template-columns: auto 19% 19% 19%;
      font-size: 0.8rem;
      height: 50px;
    }
  }
`;

const CartTotal = styled.div`
  width: 30%;
  margin-left: auto;

  .grid {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    height: 100px;
    align-items: center;
    border-top: 3px solid crimson;
    margin-top: 25px;

    h4 {
      &:nth-child(odd) {
        margin-left: 10px;
      }

      &:nth-child(even) {
        margin-left: auto;
        margin-right: 10px;
        font-weight: normal;
      }
    }
  }

  .checkout-button {
    border: none;
    width: 100%;
    margin: 15px auto;
    background-color: crimson;
    color: white;
    border-radius: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 250ms ease-in-out;

    i:first-child {
      margin-left: auto;
      margin-right: 5px;
    }
    i:last-child {
      margin-left: auto;
      margin-right: 5px;
    }

    &:hover {
      cursor: pointer;
      background-color: #e72a50;
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [subtotal, setSubtotal] = useState(0);
  const [iva, setIva] = useState(0);

  const calculateSubTotal = (items) => {
    return items.reduce((acc, curr) => {
      if (curr.sale_price) {
        acc = acc + curr.sale_price * curr.qty;
      } else {
        acc = acc + curr.regular_price * curr.qty;
      }

      return acc;
    }, 0);
  };

  const calculateIva = (value) => value * 0.22;

  const formatNumber = (num) => (Math.round(num * 100) / 100).toFixed(2);

  useEffect(() => {
    setSubtotal(calculateSubTotal(cart));
  }, [setSubtotal, cart]);

  useEffect(() => {
    setIva(calculateIva(subtotal));
  }, [subtotal, setIva]);

  return (
    <CartPage>
      <Container>
        <CartItemsList>
          <div className="top">
            <h4>Producto</h4>
            <h4>Cantidad</h4>
            <h4>Precio Unitario</h4>
            <h4>Precio Total</h4>
          </div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItemsList>
        <CartTotal>
          <div className="grid">
            <h4>Subtotal</h4>
            <h4>$ {formatNumber(subtotal)}</h4>
            <h4>IVA</h4>
            <h4>$ {formatNumber(iva)}</h4>
            <h4>Total</h4>
            <h4>$ {formatNumber(subtotal + iva)}</h4>
          </div>
          <button className="checkout-button">
            <i className="fas fa-shopping-cart"></i>
            <h3>Finalizar Pedido</h3>
            <i className="fas fa-arrow-right"></i>
          </button>
        </CartTotal>
      </Container>
    </CartPage>
  );
};

export default Cart;
