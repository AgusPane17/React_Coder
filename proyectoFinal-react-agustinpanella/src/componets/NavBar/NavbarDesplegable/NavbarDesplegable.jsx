import React from "react";
import { NavLink } from 'react-router-dom'

export const NavbarDesplegable = () => {
  return (
    <>
      <a
        className="dropdown-toggle catalogo"
        href="role"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categoria
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item Link" to='/mangas/accion' >
            Accion
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item Link" to = '/mangas/comedia'>
            Comedia
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item Link" to='/mangas/romance'>
            Romance
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item Link" to='/mangas/policial'>
            Policial
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item Link" to='/mangas/terror'>
            Terror
          </NavLink>
        </li>
      </ul>
    </>
  );
};
