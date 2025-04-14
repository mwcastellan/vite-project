import React from "react";

function Saludo({ ptxtmensaje }) {
  return (
    <div>
      <button
        className="boton boton-estilizado"
        onClick={() =>
          (document.getElementById(ptxtmensaje).textContent =
            "Aqui ..: " + " .. se hizo Click! 🎉: " + Date())
        }
      >
        Click me!
      </button>
    </div>
  );
}
export default Saludo;
