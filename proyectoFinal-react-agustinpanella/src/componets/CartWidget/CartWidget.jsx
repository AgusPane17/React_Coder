import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  
  const{ calcularCant } = useContext(CartContext)
  
  return (
    <div className='contenedorCartWidget' >
        
        <ShoppingCartIcon color="action" fontSize="large"/>
        <p className='contadorCarrito'>{calcularCant()}</p>
    </div>
  )
}
