import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Nav = styled.div`
  background-color: crimson;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: crimson;
  color: white;
  padding: 10px 20px;
  max-width: 1200px;
  margin: auto;

  .logo {
    font-size: 1.2rem;

    a {
      text-decoration: none;
      color: white;
    }
    span {
      font-weight: lighter;
      font-size: 1.3rem;
    }
  }

  .cart {
    margin-left: auto;
    margin-right: 15px;

    i {
      font-size: 1.3rem;
    }
    .number {
      position: absolute;
      background-color: yellow;
      border-radius: 50%;
      top: 3%;
      margin-left: 13px;
      padding: 3px 7px;
      p {
        color: black;
        font-size: 0.7rem;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  .navLinks {
    ul {
      display: flex;
      list-style: none;

      li {
        margin: 0 10px;
        text-transform: uppercase;

        a {
          padding: 10px;
          text-decoration: none;
          color: white;
          border-radius: 20px;

          &:hover {
            background-color: rgba(255, 255, 255, 0.4);
          }
        }
      }
    }
  }

  .hamburger {
    display: none;
  }

  .hamburger-links {
    display: none;
  }

  .active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  @media only screen and (max-width: 800px) {
    .navLinks {
      display: none;
    }

    .hamburger {
      display: block;
      margin-left: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    .hamburger-links {
      display: block;
      position: absolute;
      top: 55px;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: crimson;
      transition: all 200ms ease-in-out;
      text-align: center;
      z-index: 99;

      ul {
        list-style: none;
        width: 100vw;
        li {
          margin: 20px auto;
          width: 100%;
          a {
            min-width: 100px;
            padding: 10px;
            text-decoration: none;
            color: white;
          }

          i {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    .hide {
      left: -100vw;
    }

    .show {
      left: 0;
    }
  }
`;

const Navbar = ({ history, location: { pathname } }) => {
  const [isShowingLinks, setIsShowingLinks] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    setIsShowingLinks(false);
  }, [pathname]);

  useEffect(() => {
    let numOfItems = 0;
    cart.forEach((item) => (numOfItems += item.qty));

    setItemsInCart(numOfItems);
  }, [cart]);

  return (
    <Nav className="shadow">
      <NavContainer>
        <div className="logo">
          <h2>
            <Link to="/">
              <span>my</span>restaurant
            </Link>
          </h2>
        </div>
        <div className="cart" onClick={() => history.push("/cart")}>
          <i className="fas fa-shopping-cart"></i>
          {itemsInCart > 0 && (
            <div className="number">
              <p>{itemsInCart}</p>
            </div>
          )}
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <NavLink to="/products" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <i
            className="fas fa-bars fa-2x"
            onClick={() => setIsShowingLinks(!isShowingLinks)}
          ></i>
        </div>
        <div className={`hamburger-links ${isShowingLinks ? "show" : "hide"}`}>
          <ul>
            <li>
              <NavLink to="/products" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <i
                className="fas fa-times fa-2x"
                onClick={() => setIsShowingLinks(!isShowingLinks)}
              ></i>
            </li>
          </ul>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default withRouter(Navbar);
