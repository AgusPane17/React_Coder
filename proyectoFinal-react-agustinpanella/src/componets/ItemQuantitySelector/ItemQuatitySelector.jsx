import React from "react";
import "./itemQuatitySelector.css";

export const ItemQuatitySelector = ({ maximo, cant, modic }) => {
  const agregar = () => {
    cant < maximo && modic(cant + 1);
  };
  const quitar = () => {
    cant > 1 && modic(cant - 1);
  };
  return (
    <div className="menuAgregar">
      <h4 className="numeroCount">{cant}</h4>
      <br>
      </br>
      <div >
        <button className="botonera" onClick={agregar}>➕</button>
        <button className="botonera" onClick={quitar}>➖</button>
      </div>
    </div>
  );
};
