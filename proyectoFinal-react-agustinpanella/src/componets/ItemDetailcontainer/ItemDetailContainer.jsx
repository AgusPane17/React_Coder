import react, { useState, useEffect } from "react";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Cargando } from "../ItenListContainer/Cargando/Cargando";
import "./itemDetailContainer.css";
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [manga, setManga] = useState(null);
  const [Loading, setLoading] = useState(false);
  const { mangaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const mangas = db.collection("mangas");

    const manga = mangas.doc(mangaId);
    manga.get()
      .then((doc) => {
        setManga({
          id: doc.id,
          ...doc.data()
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

  }, [mangaId]);

  return (
    <div className="fondo">
      {Loading ? <Cargando /> : <ItemDetail {...manga} />}
    </div>
  );
};
