import React from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {NavbarDesplegable} from  "./NavbarDesplegable/NavbarDesplegable"

export const NavBar = () => {
  return (
    
     <nav className="my-navbar">
      <div className="navbarNavegador">
        <a className="home" href="#">Home</a>
        
        <NavbarDesplegable/>
        
      </div>
      <CartWidget/>
     </nav>
  
  
  );
};
