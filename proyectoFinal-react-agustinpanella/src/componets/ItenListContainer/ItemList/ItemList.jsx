import React from "react";
import "./itemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ mangas = []}) => {
  return (
    <div className="contenedor">
      <div className="lista">
        {mangas.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
