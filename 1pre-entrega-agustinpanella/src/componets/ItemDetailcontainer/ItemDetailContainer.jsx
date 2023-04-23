import react, { useState, useEffect } from "react";
import { traerMangas } from "../../helper/pedirMangas";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Cargando } from '../ItenListContainer/Cargando/Cargando' ;
import './itemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [manga, setManga] = useState(null);
  const [Loading, setLoading] = useState(false);
  const { mangaId } = useParams();

  useEffect(() => {
    setLoading(true);
    traerMangas()
      .then((res) => {
        setManga(res.find((manga) => manga.id === Number(mangaId)));
      })
      .catch(console.error())
      .finally(() => {
        setLoading(false);
      });
  }, [mangaId]);

  return <div className="fondo">{Loading ? < Cargando/> : <ItemDetail {...manga} />}</div>;
};
