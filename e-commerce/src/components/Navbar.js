import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../constants";
import CartButton from "./CartButton";
import { useProductContext } from "../context/ProductsContext";
import { useUserContext } from '../context/user_context'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {openSidebar}=useProductContext()
  const { myUser } = useUserContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="comfy sloth" />
          </NavLink>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link; 
            return (
              <li>
                <NavLink key={id} to={url}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <CartButton />
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        list-style: none;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
export default Navbar;
