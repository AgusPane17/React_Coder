import { createContext, useEffect } from "react";
import { useState } from 'react';

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState(init)

    useEffect(() =>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    

    const addMangaAlCarrito = (item) =>{
        setCarrito([...carrito, item])
    }
    
    const calcularCant = () =>{
        return carrito.reduce((acc, manga) => acc + manga.counter, 0)
    }

    const precioTotal = () =>{
        return carrito.reduce((acc, manga) => acc + manga.precioTomo * manga.counter, 0)
    }

    const quitarManga = (mangaId) =>{
        const newCart = carrito.filter((manga) => manga.id !== mangaId)
        setCarrito(newCart)
    }
    const limpiarCarrito = () =>{
        setCarrito([])
    }


    return(
        <CartContext.Provider value={{//se crea la funcion dentro de llaves para marcar que es un objeto
                                    //aca se ponene los metodo que se exportan a toda la pag
                addMangaAlCarrito,
                calcularCant,
                precioTotal,
                quitarManga,
                carrito,
                limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}