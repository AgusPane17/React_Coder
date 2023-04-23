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
        <div className='fondo'>
            <div className='itemDetailContainer'>
            <div class= "seccion1">
                <img className='imagenManga' src={img} alt="" />
            </div>

            <div class= "seccion2">
                <h3>{nombre}</h3>
                <h4>{categoria}</h4>
                <p>{descripcion}</p>
                <p>El precio por tomo es:{precioTomo}</p>
            </div>

            <div class= "seccion3"></div>
        </div>
        </div>
        
        
    )
  }
  
