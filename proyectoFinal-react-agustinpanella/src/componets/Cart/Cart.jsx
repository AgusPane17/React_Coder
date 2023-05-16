import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { carrito, precioTotal, quitarManga, limpiarCarrito } =
    useContext(CartContext);

  return (
    <div className="contenedorGeneral">
      {carrito.length === 0 ? (
        <>
          <h2 className="textoCart">Carrito vacio</h2>
          
          <Link to="/" className="btn btn-success">
            {" "}
            Volver a comprar
          </Link>
        </>
      ) : (
        <>
          <h2 className="textoCart"> Lista de compra</h2>
          

          <div className="contenedorLista">
            {carrito.map((manga) => (
              <div className="listado">
                <img className="imgCart" src={manga.img} alt="" />
                <p className="textoDescriptivoCart"> Manga: {manga.nombre} Tomo{manga.numeroTomo}</p>
                <p className="textoDescriptivoCart">Tomo: {manga.numeroTomo}</p>
                <p className="textoDescriptivoCart"> ${manga.precioTomo}</p>
                <p className="textoDescriptivoCart"> cantidad: {manga.counter}</p>
                <Button  onClick={() => quitarManga(manga.id)}>
                  <BsTrashFill />
                </Button>
              </div>
            ))}
          </div>

          <hr />
          <strong className="textoCart">Precio total: $ {precioTotal()}</strong>
          <hr />
          <div className="botoneraCart">

          <Button className="btn btn-danger" onClick={limpiarCarrito}>
            
            Vaciar Carrito
          </Button>
          <Link to="/" className="btn btn-success">
            
            Seguir comprando
          </Link>
          <Link className="btn btn-success" to="/checkout">
            Finalizar la compra 
          </Link>
          </div>
        </>
      )}
    </div>
  );
};
