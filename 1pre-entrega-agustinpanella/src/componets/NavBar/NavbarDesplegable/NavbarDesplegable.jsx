import React from "react";

export const NavbarDesplegable = () => {
  return (
    <>
      <a
        className="dropdown-toggle catalogo"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Category
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Comedy
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Romance
          </a>
        </li>
      </ul>
    </>
  );
};
