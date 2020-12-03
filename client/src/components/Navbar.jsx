import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: crimson;
  color: white;
  padding: 10px 20px;

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

  .navLinks {
    margin-left: auto;

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
      margin-left: auto;

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

const Navbar = ({ location: { pathname } }) => {
  const [isShowingLinks, setIsShowingLinks] = useState(false);

  useEffect(() => {
    setIsShowingLinks(false);
  }, [pathname]);

  return (
    <NavContainer>
      <div className="logo">
        <h2>
          <Link to="/">
            <span>my</span>restaurant
          </Link>
        </h2>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Cart
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
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Cart
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
  );
};

export default withRouter(Navbar);
