import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavBar } from "./componets/NavBar/NavBar";

import { ItemListContainer } from "./componets/ItenListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailcontainer/ItemDetailContainer";

import {
  BrowserRouter,
  Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
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
          <Route path="/detail/:mangaId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
