import React from "react";
import styled from "styled-components";
import lines from "../assets/shapes/lines.png";
import { categories } from "../utils/categories";
import { Link } from "react-router-dom";

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  padding-top: 55px;
  padding-bottom: 55px;

  a.menu-button {
    position: absolute;
    text-decoration: none;
    padding: 15px 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    background-color: #ffd000;
    border: none;
    border-radius: 15px;
    z-index: 20;
    top: -25px;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: #c9a400;
      color: white;
    }
  }
`;
const ProductList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(8, 150px);
  justify-content: center;

  @media only screen and (max-width: 1214px) {
    grid-template-columns: repeat(4, 150px);
  }

  @media only screen and (max-width: 654px) {
    grid-template-columns: repeat(2, 150px);
  }
`;

const ProductItem = styled.li`
  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;

    .content {
      position: relative;
      margin: auto;
      text-align: center;
      z-index: 2;
      width: 100px;
      height: 120px;

      .lines {
        position: absolute;
        top: 0;
        margin: auto;
        width: 100%;
        z-index: -1;
        transform: scale(0);
        transition: all 200ms ease-in-out;
      }

      img {
        object-fit: contain;
        width: 100%;
        height: 100px;
      }

      p {
        text-transform: uppercase;
        font-weight: bold;
        transition: all 200ms ease-in-out;
      }
    }

    &:hover {
      .content {
        .lines {
          transform: scale(1.8);
        }

        p {
          color: #f5cc18;
        }
      }
    }
  }
`;

const ProductCategories = ({ withMenuButton }) => {
  return (
    <ProductsContainer>
      {withMenuButton && (
        <Link className="menu-button shadow" to="/menu">
          Menu
        </Link>
      )}
      <ProductList>
        {categories.map((cat, idx) => {
          return (
            <ProductItem key={idx}>
              <Link to={cat.route}>
                <div className="content">
                  <img src={lines} alt="lines" className="lines" />
                  <img src={cat.img} alt={cat.name} />
                  <p>{cat.name}</p>
                </div>
              </Link>
            </ProductItem>
          );
        })}
      </ProductList>
    </ProductsContainer>
  );
};

export default ProductCategories;
