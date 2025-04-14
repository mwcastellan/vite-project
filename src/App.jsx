import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Saludo from "./components/Saludo";

function App() {
  return (
    <>
      <h1>Esto es H1 1</h1>
      <Saludo ptxtmensaje="txtmensaje1" />
      <p id="txtmensaje1" className="txtmensaje"></p>
      <h2>Esto es H2</h2>
      <Saludo ptxtmensaje="txtmensaje2" />
      <p id="txtmensaje2" className="txtmensaje"></p>
    </>
  );
}
export default App;
