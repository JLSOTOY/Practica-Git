document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.querySelector(".pantalla");
  const botones = document.querySelectorAll(".boton"); // Selecciona todos los elementos con la clase "boton"

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const botonApretado = boton.textContent; // Captura el texto del botón
      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        if (
          pantalla.textContent.length === 1 ||
          pantalla.textContent === "Error!"
        ) {
          pantalla.textContent = "0";
        } else pantalla.textContent = pantalla.textContent.slice(0, -1);
        return;
      }
      if (boton.id === "igual") {
        try {
          pantalla.textContent = eval(pantalla.textContent); //eval una funsión que hace cualquier operacion matematico siempre y cuando este un operador
        } catch {
          pantalla.textContent = "Error!";
        }
        return;
      }
      if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = botonApretado;
      } else pantalla.textContent += botonApretado; // Muestra el texto del botón en la pantalla
    });
  });
});
