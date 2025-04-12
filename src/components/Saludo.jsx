import React from "react";

function Saludo({ pmensaje1, pmensaje2 }) {
  function mensaje1() {
    return "Mensaje1:Botón estilizado: ";
  }
  function mensaje2() {
    return "Mensaje2:Hacer click aquí";
  }
  function manejarClick() {
    let fecha = new Date();
    return (document.getElementById("txtmensaje").textContent =
      "Aqui ..: " + " .. se hizo Click! 🎉: " + fecha);
  }

  return (
    <div className="boton">
      <p>
        {mensaje1()} {pmensaje1}
      </p>
      <button className="boton-estilizado" onClick={manejarClick}>
        {mensaje2()} {pmensaje2}
      </button>
      <p id="txtmensaje" className="txtmensaje"></p>
    </div>
  );
}
export default Saludo;
