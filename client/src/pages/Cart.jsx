import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CartItem from "../components/CartItem";

const CartPage = styled.div`
  background-color: #f1f1f1;
`;

const Container = styled.div`
  margin: auto;
  padding-top: 30px;
  max-width: 1100px;
  min-height: 100vh;
`;

const CartItemsList = styled.div`
  .top {
    display: grid;
    height: 100px;
    align-items: center;
    grid-template-columns: auto 15% 15% 15%;
    margin-bottom: 5px;
    background-color: white;
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

const Cart = ({ cart }) => {
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
            <CartItem item={item} />
          ))}
        </CartItemsList>
      </Container>
    </CartPage>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Cart);
