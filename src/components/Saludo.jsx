import React from "react";

function Saludo() {
  function mensaje1() {
    return "Botón estilizado";
  }
  function mensaje2() {
    return "Hacer click aquí";
  }
  const manejarClick = () => {
    let fecha = new Date();
    document.getElementById("txtmensaje").textContent =
      "Aqui se hizo Click! 🎉: " + fecha;
  };
  return (
    <div class="boton">
      <p>{mensaje1()}</p>
      <button class="boton-estilizado" onClick={manejarClick}>
        {mensaje2()}
      </button>
      <p id="txtmensaje" class="txtmensaje"></p>
    </div>
  );
}
export default Saludo;
