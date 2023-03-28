import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {NavBar} from './componets/NavBar/NavBar';
import { Title } from "./componets/Title/Title";

function App() {
  return (
    <>
      <Title/>
      <NavBar/>
    </>
  );
}

export default App;
