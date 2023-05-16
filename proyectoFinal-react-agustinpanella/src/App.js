import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavBar } from "./componets/NavBar/NavBar";
import React, {useContext, useState} from 'react';

import { ItemListContainer } from "./componets/ItenListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailcontainer/ItemDetailContainer";
import { CartProvider } from "./componets/context/CartContext";
import { Cart } from "./componets/Cart/Cart";
import {
  BrowserRouter,
  Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  // const [carrito, setCarrito] = useState([])
  // console.log(carrito)
  // const addMangaAlCarrito = (manga) =>{
    
  //   setCarrito([...carrito, manga])
    
  // } 
  // const calcularCant = () =>{
  //   return carrito.reduce((acumulador, manga)=>acumulador + manga.counter, 0)
  // }

  return (
    <CartProvider> 
 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Lista de mangas disponibles" />
            }
          />
          <Route
            path="/mangas/:categoria"
            element={<ItemListContainer greeting="Mangas de " />}
          />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detail/:mangaId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
