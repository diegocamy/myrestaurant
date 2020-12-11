import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";

import { ReactComponent as CurveSVG } from "../assets/svg/wave.svg";

const Card = styled.div`
  width: 250px;
  border-radius: 15px;
  margin: 10px;
  background-color: white;

  .top {
    width: 100%;
    height: 150px;
    position: relative;

    img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      position: absolute;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .curve {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      z-index: 2;
    }

    i {
      background-color: #60ee6b;
      border-radius: 50%;
      padding: 15px;
      padding-right: 18px;
      font-size: 1.4rem;
      color: white;
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translateX(-50%);
      z-index: 3;
      transition: background-color 200ms linear;

      &:hover {
        cursor: pointer;
        background-color: #4dc457;
      }
    }
  }

  .bottom {
    height: 120px;

    h3 {
      margin: 10px;
    }

    p {
      font-weight: bold;

      span {
        margin: 0 10px;
      }

      .old {
        color: gray;
        text-decoration: line-through;
      }

      .new {
        color: #4dc457;
      }
    }

    .regular {
      font-weight: bold;
      color: gray;
    }

    .detalles {
      margin-top: 10px;
      color: white;
      background-color: #ee3c60;
      border: none;
      padding: 10px 15px;
      border-radius: 30px;
      font-size: 1.1rem;
      font-weight: bold;
      transition: transform 100ms linear;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;

const FoodCard = ({ item, addToCart }) => {
  const { id, picture, name, sale_price, regular_price } = item;
  return (
    <Card className="shadow">
      <div className="top">
        <img src={picture} alt={name} />
        <CurveSVG className="curve" />
        <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
      </div>
      <div className="bottom">
        <h3>{name}</h3>
        {sale_price ? (
          <p>
            <span className="old">${regular_price}</span>{" "}
            <span className="new">${sale_price}</span>
          </p>
        ) : (
          <p className="regular">$ {regular_price}</p>
        )}
        <Link to={`/product/${id}`}>
          <button className="detalles">Detallles</button>
        </Link>
      </div>
    </Card>
  );
};

export default connect(null, { addToCart })(FoodCard);
