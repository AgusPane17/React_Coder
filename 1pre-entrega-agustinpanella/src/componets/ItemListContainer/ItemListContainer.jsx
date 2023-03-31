import React from 'react'
import './itemListContainer.css'

export const ItemListContainer = ({text}) => {
  return (
    <div className='contenedorSaludo'>
       <h3 className='Saludo'>
        Este es un {text}
    </h3> 
    </div>
    
  )
}
