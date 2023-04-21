import React from 'react';
import './item.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({id, nombre, descripcion, precioTomo, img, categoria, cantidadDeTomos}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="..." />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <Card.Body>
        <Button variant="primary">Card link</Button>
        <Button variant="secondary">Another link</Button>
      </Card.Body>
    </Card>
  );
};
