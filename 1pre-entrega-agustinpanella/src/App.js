
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {NavBar} from './componets/NavBar/NavBar';
import { Main} from "./componets/Main/Main";
import {ItemListContainer} from './componets/Main/ItenListContainer/ItemListContainer'


function App() {
  return (
    <>
      
      <NavBar/>
      <Main/>

    </>
  );
}

export default App;
