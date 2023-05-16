import React from 'react'

export const ItemQuatitySelector = ({maximo,cant,modic}) => {
  
  const agregar = () =>{
        (cant<=maximo)&&modic(cant+1);
  }
  const quitar = () =>{
    (cant>0)&&modic(cant-1);
    }
    return (
        <>
         <h4>{cant}</h4>
        <div>
            <button onClick={agregar}>➕</button>
            <button onClick={quitar}>➖</button>
        </div>
        </>
  )
}
