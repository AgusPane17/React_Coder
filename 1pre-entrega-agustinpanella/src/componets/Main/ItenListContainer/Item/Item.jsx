import React from 'react';
import './item.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({id, nombre, descripcion, precioTomo, img, categoria, cantidadDeTomos}) => {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      
        <Button variant="primary">Card link</Button>
        <Button variant="secondary">Another link</Button>
      </Card.Body>
    </Card>
  );
};
