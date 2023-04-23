import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './itemDetail.css'





export const ItemDetail = ({id, nombre, descripcion, precioTomo, img, categoria, cantidadDeTomos}) => {
  
  const navigate = useNavigate()

  const volverAtras = () =>{
    navigate(-1)
  }
  

    return (
        
        <div className='itemDetailContainer'>
            <div class= "seccion1">
                <img className='imagenManga' src={img} alt="" />
            </div>

            <div class= "seccion2">
                <h3 className='descripcion'>{nombre}</h3>
                <h4 className='descripcion'>{categoria}</h4>
                <p className='descripcion'>{descripcion}</p>
                <p className='descripcion'>El precio por tomo es: {precioTomo}</p>
            </div>

            <div class= "seccion3">
            <Button onClick={volverAtras} className='btn btn-sucess botonParaAtras'>Volver atras</Button>
            </div>
        </div>
        
        
        
    )
  }
  
