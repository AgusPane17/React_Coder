import React from "react";
import { Loading } from "../Loading/Loading";
import'./cargando.css'

export const Cargando = () => {
  return (
    <div className="listaCargando">
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};
