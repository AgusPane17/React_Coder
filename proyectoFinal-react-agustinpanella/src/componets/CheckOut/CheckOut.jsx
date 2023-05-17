import React, { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getFirestore } from "../../Firebase/config";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Swal from "sweetalert2";
import "firebase/firestore";
import './Checkout.css'

export const Checkout = () => {
  const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext);

  const [nombreU, setNombreU] = useState("");

  const [apellidoU, setApellidoU] = useState("");

  const [emailU, setEmailU] = useState("");
  const [telefonoU, setTelefonoU] = useState("");
  const [direccionU, setDireccionU] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    const pedido = {
      buyer: {
        emailU,
        nombreU,
        apellidoU,
        telefonoU,
        direccionU,
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const db = getFirestore();

    const listaPedidos = db.collection("pedidos");

    listaPedidos
      .add(pedido)
      .then((resp) => {
        Swal.fire({
          icon: "success",
          title: "Se tomo tu pedido",
          text: `Este es su numero de orden: ${resp.id}`,
          willClose: () => {
            limpiarCarrito();

          },
        });
      
        
      })

    carrito.forEach((manga) => {
      const docRef = db.collection("productos").doc(manga.id);

      docRef.get().then((doc) => {
        docRef.update({
          stock: doc.data().stock - manga.counter,
        });
      });
    });
  };

  return (
    <div className="contendorCheckout">
      <h3 className="tituloCheckout">Finalizar perdido
      </h3>
      <hr />

      <form onSubmit={handleSubmit} className="container mt-3 conteinerInputCheckout">
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            className="form-control inputCheckout"
            onChange={(e) => setEmailU(e.target.value)}
            value={emailU}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control inputCheckout"
            onChange={(e) => setNombreU(e.target.value)}
            value={nombreU}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Apellido"

            className="form-control inputCheckout"
            onChange={(e) => setApellidoU(e.target.value)}
            value={apellidoU}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Teléfono"
            className="form-control inputCheckout"
            onChange={(e) => setTelefonoU(e.target.value)}
            value={telefonoU}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Direccion"
            className="form-control inputCheckout"
            onChange={(e) => setDireccionU(e.target.value)}
            value={direccionU}
          />
        </div>
        <div className="botoneraCheckout"> 
          <button type="submit" className="btn btn-success botonBotoneraCheckout">
          Enviar pedido
        </button>

        <Link to="/cart" className="btn btn-info botonBotoneraCheckout">
          Volver al carrito
        </Link>
        </div>
        


      </form>
    </div>
  );
};
