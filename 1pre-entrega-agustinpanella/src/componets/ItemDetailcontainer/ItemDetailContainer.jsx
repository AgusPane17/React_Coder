import react, { useState, useEffect } from "react";
import { traerMangas } from "../../helper/pedirMangas";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loading } from "../ItenListContainer/Loading/Loading";

export const ItemDetailContainer = () => {
  const [manga, setManga] = useState(null);
  const [Cargando, setCargando] = useState(false);
  const { mangaId } = useParams();

  useEffect(() => {
    setCargando(true);
    traerMangas()
      .then((res) => {
        setManga(res.find((manga) => manga.id === Number(mangaId)));
      })
      .catch(console.error())
      .finally(() => {
        setCargando(false);
      });
  }, [mangaId]);

  return <div>{Cargando ? <Loading /> : <ItemDetail {...manga} />}</div>;
};
