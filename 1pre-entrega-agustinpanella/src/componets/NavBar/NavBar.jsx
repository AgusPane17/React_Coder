import React from "react";
import "./navbar.css";
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {
  return (
    
     <nav className="my-navbar">
      <div className="navbarNavegador">
        <a className="home" href="#">Home</a>
        
        
        <a className="dropdown-toggle catalogo" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Category
             </a>
             <ul className="dropdown-menu">
               <li><a className="dropdown-item" href="#">Action</a></li>
               <li><a className="dropdown-item" href="#">Comedy</a></li>
               <li><a className="dropdown-item" href="#">Romance</a></li>
             </ul>
      </div>
      <CartWidget/>
     </nav>
  
  
  );
};
