import React from "react";
import "./navbar.css";
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {
  return (
    
     <nav className="my-navbar">
      <div className="navbarNavegador">
        <a className="home" href="#">Home</a>
        
        
        <a class=" dropdown-toggle catalogo" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Category
             </a>
             <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Action</a></li>
               <li><a class="dropdown-item" href="#">Comedy</a></li>
               <li><a class="dropdown-item" href="#">Romance</a></li>
             </ul>
      </div>
      <CartWidget/>
     </nav>
    
  //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  //   <div class="container-fluid">
  //     <a class="navbar-brand" href="#">Navbar</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarNavDropdown">
  //       <ul class="navbar-nav">
                   
  //         <li class="nav-item dropdown">
  //           
  //         </li>
  //       </ul>
  //     </div>
  //     
  //   </div>
  // </nav>
  
  );
};
