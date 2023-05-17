import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ItemQuatitySelector } from "../ItemQuantitySelector/ItemQuatitySelector";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({
  id,
  nombre,
  descripcion,
  precioTomo,
  img,
  categoria,
  numeroTomo,
  stock,
}) => {
  

  const navigate = useNavigate();
  
  const volverAtras = () => {
    navigate(-1);
  };

  const [counter, setCounter] = useState(1);
  
  const { addMangaAlCarrito } = useContext(CartContext);
  
  const agregarAlCarrito = () => {
    const newManga = {
      id,
      nombre,
      img,
      precioTomo,
      numeroTomo,
      counter,
    };

    addMangaAlCarrito(newManga);
    Swal.fire({
      icon: "success",
      title: "Ya se agrego tu manga al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="itemDetailContainer">
      <div className="seccion1">
        <img className="imagenManga" src={img} alt="" />
      </div>

      <div className="seccion2">
        <h3 className="descripcion">{nombre}</h3>
        <h4 className="descripcion">{categoria}</h4>
        <p className="descripcion">{descripcion}</p>
        <p className="descripcion">Numero de tomo: {numeroTomo}</p>
        <p className="descripcion">El precio por tomo es: {precioTomo}</p>
      </div>

      <div className="seccion3">
        <div className="contenedorAgregar"> 
          <ItemQuatitySelector
            maximo={stock}
            cant={counter}
            modic={setCounter}
          />
          <Button onClick={agregarAlCarrito} className="btn btn-sucess botonAgregar">
            Agregar al carro
          </Button>
        </div>
        <Button onClick={volverAtras} className="btn btn-sucess botonParaAtras">
          Volver atras
        </Button>
      </div>
    </div>
  );
};
