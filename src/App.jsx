import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Saludo from "./components/Saludo";

function App() {
  return (
    <>
      <h1>Esto es H1 1</h1>
     <Saludo pmensaje1='Saludo Mensaje1' pmensaje2='Saludo Mensaje2'/>
      <h2>Esto es H2 1</h2>

      <h2>Esto es H2 2</h2>
     <Saludo pmensaje1='Saludo Mensaje11' pmensaje2='Saludo Mensaje12'/>
      <h2>Esto es H2 3</h2>
    </>
  );
}
export default App;
