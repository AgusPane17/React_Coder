
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {NavBar} from './componets/NavBar/NavBar';
import { Title } from "./componets/Title/Title";
import {ItemListContainer} from './componets/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
      <Title/>
      <NavBar/>
      <ItemListContainer text='saludo para mostrar'/>
    </>
  );
}

export default App;
