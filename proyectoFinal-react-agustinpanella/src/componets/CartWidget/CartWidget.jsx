import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

export const CartWidget = () => {
  return (
    <div className='contenedorCartWidget' >
        
        <ShoppingCartIcon color="action" fontSize="large"/>
        <p className='contadorCarrito'>4</p>
    </div>
  )
}
