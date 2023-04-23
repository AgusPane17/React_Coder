import React, { useState, useEffect } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { Cargando } from './Cargando/Cargando';
import { traerMangas } from "../../helper/pedirMangas";
import { ItemList } from "./ItemList/ItemList";

export const ItemListContainer = ({greeting}) => {
  const [manga, setManga] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    traerMangas()
      .then((res) => {
        if (categoria) {
          setManga(res.filter((manga) => manga.categoria === categoria));
          console.log(res.filter((manga) => manga.categoria === categoria))
        } else {
          setManga(res);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  return (
    <div >
      {loading ? (
        <div className="contenedorMangas">
        <Cargando/>
        </div>
      ) : (
        
      <div className="contenedorMangas">
        
        <h3 className="textLista"> {greeting} {categoria} </h3>
        <hr />
        <ItemList mangas={manga} />

      </div>
        
      )}
    </div>
  );
};
