import React from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavbarDesplegable } from "./NavbarDesplegable/NavbarDesplegable";
import { Title } from "./Title/Title";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="my-navbar">
      <div className="navbarNavegador">
        <Title />

        <NavLink className="home" to="/">
          Inicio
        </NavLink>
        
        <NavbarDesplegable />
      </div>
      <NavLink className='carrito' to='/cart'><CartWidget /> </NavLink>
      
    </nav>
  );
};
