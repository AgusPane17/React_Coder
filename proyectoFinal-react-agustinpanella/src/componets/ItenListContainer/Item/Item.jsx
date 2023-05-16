import React from "react";
import "./item.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, descripcion, img }) => {
  console.log()
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="titulo">{nombre}</Card.Title>
        <Card.Text className="descripcion">{descripcion}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ir al manga</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
