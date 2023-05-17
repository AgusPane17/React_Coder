import React, { useState, useEffect } from "react";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { Cargando } from "./Cargando/Cargando";
// import { traerMangas } from "../../helper/pedirMangas";
import { ItemList } from "./ItemList/ItemList";

import { getFirestore } from "../../Firebase/Config";

export const ItemListContainer = ({ greeting }) => {


  const [manga, setManga] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore(); //esto trae la coneccion

    const tipoMangas = categoria

    ?db.collection('mangas').where('categoria','==',categoria):db.collection('mangas')

    tipoMangas.get()
    .then((res) => {
      const newItem = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data()};// recorre toddo el array por el id y trae los datos de cada uno
      });
      setManga(newItem);
      setLoading(false)
      

      // .catch((console.error))
    });
    // setTimeout(()=>{
    //   setLoading(false)q
    // },1500);
    
    
  }, [categoria,setLoading]);

  return (
    <div>
      {loading ? (
        <div className="contenedorMangas">
          <Cargando />
        </div>
      ) : (
        <div className="contenedorMangas">
          <h3 className="textLista">
            {" "}
            {greeting} {categoria}{" "}
          </h3>
          <hr />
          <ItemList mangas={manga} />
        </div>
      )}
    </div>
  );
};
