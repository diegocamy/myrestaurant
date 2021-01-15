import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FeaturedFoods from "../components/FeaturedFoods";
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

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 45px 0;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;

  hr {
    border: 1px solid #f2f2f2;

    &:first-of-type {
      margin-top: 20px;
    }

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  img {
    width: 45%;
    border-radius: 15px;
  }

  a {
    text-decoration: none;
    color: crimson;
  }

  .text {
    width: 45%;
    margin-left: 25px;

    h2 {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .price {
      margin-top: 15px;
      .sale {
        color: #4dc457;
        font-size: 2rem;
        font-weight: bold;
        margin-right: 10px;
      }

      .regular {
        color: darkgray;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: line-through;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      padding: 10px;

      .left {
        display: flex;
        align-items: center;
        border: 1px solid #f2f2f2;

        p {
          margin: auto 25px;
        }

        button {
          border: none;
          background-color: #fafafa;
          padding: 5px 10px;

          &:hover {
            cursor: pointer;
          }

          &:first-of-type {
            border-right: 1px solid #f2f2f2;
          }

          &:last-of-type {
            border-left: 1px solid #f2f2f2;
          }
        }
      }

      .add_to_cart {
        margin-left: auto;
        border: none;
        background-color: crimson;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        transition: all 300ms linear;

        &:hover {
          cursor: pointer;
          background-color: #ec143f;
          transform: translateY(-2px);
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
    }

    .text {
      width: 80%;
    }
  }

  @media only screen and (max-width: 450px) {
    .text {
      .buttons {
        .add_to_cart {
          font-size: 0.7rem;
          padding: 10px;
        }
      }
    }
  }
`;

const RelatedProducts = styled.div`
  margin-top: 45px;
  text-align: center;

  h2 {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 4px solid red;
    width: fit-content;
    margin: auto;
    margin-bottom: 15px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 270px);
    justify-content: center;

    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 270px);
    }
    @media only screen and (max-width: 540px) {
      grid-template-columns: 270px;
    }
  }
`;

const Product = () => {
  return (
    <Container>
      <ProductInfo>
        <img
          src="https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress"
          alt="pizza"
        />
        <div className="text">
          <h2>Pizza 4 Quesos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores et
            porro omnis, laboriosam sapiente corporis, at qui voluptatem
            voluptatum non ducimus neque facere.
          </p>

          <p className="price">
            <span className="sale">$170</span>{" "}
            <span className="regular">$190</span>
          </p>
          <hr />
          <div className="buttons">
            <div className="left">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="add_to_cart">Agregar al carrito</button>
          </div>
          <hr />
          <p>
            Categoria: <Link to={`/categories/pizza`}>Pizzas</Link>
          </p>
        </div>
      </ProductInfo>
      <RelatedProducts>
        <h2>Productos Relacionados</h2>
        <div className="cards">
          {data.map((food) => {
            return <FoodCard key={food.id} item={food} />;
          })}
        </div>
      </RelatedProducts>
    </Container>
  );
};

export default Product;
